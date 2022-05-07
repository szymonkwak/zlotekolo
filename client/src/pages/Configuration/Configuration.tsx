import { Box, Button, Center, Checkbox, Group, Modal, NumberInput, Select, Space, Text, TextInput, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { axiosClient } from '~/api/axiosClient';

import { Logo } from '../../components/Logo';
import { Paths } from '../../routes/paths';
import ErrorMessage from '../Configuration/ErrorMessage';
import { Info } from './Info/Info';
import { Rules } from './Rules/Rules';

export const Configuration = () => {
  const isMobileView = useMediaQuery('(max-width: 570px)');
  const [nickname, setNickname] = useState('');
  const [contractType, setContractType] = useState<string | null>(null);
  const [toWorkDistance, setToWorkDistance] = useState<number | undefined>(2);
  const [acceptRules, setAcceptRules] = useState(false);
  const [dataProccesingAgreement, setDataProccesingAgreement] = useState(false);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.margin = '0';
  }, []);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      let typeOfContract: string;
      contractType === 'Pełny etat' ? (typeOfContract = 'FULL_TIME') : (typeOfContract = 'OTHER');
      const mandatoryInfo = {
        nickname,
        typeOfContract,
        toWorkDistance,
      };
      await axiosClient.put(`${process.env.VITE_SERVER_URL}/api/scoring/users`, mandatoryInfo);
      navigate(Paths.Home);
    } catch (err) {
      if (err) setErrorDialogOpen(true);
    }
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
            <ErrorMessage message="Błąd" open={errorDialogOpen} setOpen={setErrorDialogOpen} />
            <Group mt="sm" noWrap align="center" spacing="xs">
              <Text>Podaj pseudonim</Text>
              <Info hoverText="Pseudonim będzie Twoim identyfikatorem podczas wysyłania wyników do Organizatora Kampanii. Jego ustawienie jest obligatoryjne." />
            </Group>
            <TextInput size="md" placeholder="Wpisz" required value={nickname} onChange={(e) => setNickname(e.target.value)} />
            <Group mt="sm" noWrap align="center" spacing="xs">
              <Text>Wybierz rodzaj umowy</Text>
              <Info hoverText="Wymiar etatu określa maksymalną liczbę przejzadów w miesiącu, która wpływa na obliczenia frekwencji." />
            </Group>
            <Select
              size="md"
              placeholder="Wybierz"
              required
              value={contractType}
              onChange={setContractType}
              data={['Pełny etat', 'Inne']}
            />
            <Group mt="sm" noWrap align="center" spacing="xs">
              <Text>Długość drogi do pracy (km)</Text>
              <Info hoverText="Aby móc uczestniczyć w Kampanii długość drogi do pracy musi być większa niż 2 km." />
            </Group>
            <NumberInput
              size="md"
              precision={1}
              decimalSeparator=","
              min={2}
              step={0.1}
              required
              value={toWorkDistance}
              onChange={setToWorkDistance}
            />
            <Space h="xl" />
            <Group noWrap mb={2}>
              <Checkbox required checked={acceptRules} onChange={(event) => setAcceptRules(event.currentTarget.checked)} />
              <Rules />
            </Group>

            <Group noWrap>
              <Checkbox
                required
                checked={dataProccesingAgreement}
                onChange={(event) => setDataProccesingAgreement(event.currentTarget.checked)}
              />
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
