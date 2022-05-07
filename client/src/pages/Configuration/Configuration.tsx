import { Box, Button, Center, Checkbox, Group, Modal, NumberInput, Select, Space, Text, TextInput, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { SyntheticEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { queryClient } from '~/api/QueryClientProvider';
import { QueryKeys } from '~/api/QueryKeys';

import { Logo } from '../../components/Logo';
import { Paths } from '../../routes/paths';
import { Info } from './Info/Info';
import { putMandatoryInfo } from './requests/putMandatoryInfo';
import { Statute } from './Statute/Statute';

const contractTypes = [
  { value: 'FULL_TIME', label: 'Pełny etat' },
  { value: 'OTHER', label: 'Inne' },
];

export const Configuration = () => {
  const { mutateAsync: saveMandatoryInfo } = useMutation(putMandatoryInfo);
  const isMobileView = useMediaQuery('(max-width: 570px)');

  const [nickname, setNickname] = useState('');
  const [typeOfContract, setTypeOfContract] = useState<string | null>('');
  const [toWorkDistance, setToWorkDistance] = useState<number | undefined>(2);
  const [acceptStatute, setAcceptStatute] = useState(false);
  const [acceptDataProcessing, setAcceptDataProcessing] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await saveMandatoryInfo({ nickname, typeOfContract, toWorkDistance });
    queryClient.invalidateQueries(QueryKeys.Me);
    navigate(Paths.Home);
  };

  return (
    <Modal
      size="lg"
      withCloseButton={false}
      opened
      onClose={() => {
        /* do not close it */
      }}
    >
      <Center m="md">
        <Logo />
      </Center>

      <form onSubmit={handleSubmit}>
        <Group position="center">
          <Box my={isMobileView ? 0 : 'sm'}>
            <Title order={isMobileView ? 3 : 1}>Skonfiguruj swoje konto</Title>

            <Group mt="sm" noWrap align="center" spacing="xs">
              <Text>Podaj pseudonim</Text>
              <Info hoverText="Pseudonim będzie Twoim identyfikatorem podczas wysyłania wyników do Organizatora Kampanii. Jego ustawienie jest obligatoryjne." />
            </Group>
            <TextInput size="md" placeholder="Wpisz" required value={nickname} onChange={(e) => setNickname(e.target.value)} />

            <Group mt="sm" noWrap align="center" spacing="xs">
              <Text>Wybierz rodzaj umowy</Text>
              <Info hoverText="Wymiar etatu określa maksymalną liczbę przejzadów w miesiącu, która wpływa na obliczenia frekwencji." />
            </Group>
            <Select size="md" placeholder="Wybierz" required value={typeOfContract} onChange={setTypeOfContract} data={contractTypes} />

            <Group mt="sm" noWrap align="center" spacing="xs">
              <Text>Długość drogi do pracy (km)</Text>
              <Info hoverText="Aby móc uczestniczyć w Kampanii długość drogi do pracy musi być większa niż 2 km." />
            </Group>
            <NumberInput size="md" required precision={1} min={2} step={0.1} value={toWorkDistance} onChange={setToWorkDistance} />
            <Space h="xl" />

            <Group noWrap mb={2}>
              <Checkbox required checked={acceptStatute} onChange={(e) => setAcceptStatute(e.currentTarget.checked)} />
              <Statute />
            </Group>

            <Group noWrap>
              <Checkbox required checked={acceptDataProcessing} onChange={(e) => setAcceptDataProcessing(e.currentTarget.checked)} />
              <Text>Wyrażam zgodę na przetwarzanie danych osobowych</Text>
            </Group>
            <Space h="md" />

            <Group position="right" my={isMobileView ? 0 : 'md'}>
              <Button type="submit">ROZPOCZNIJ</Button>
            </Group>
          </Box>
        </Group>
      </form>
    </Modal>
  );
};
