import { Box, Button, Checkbox, Group, NumberInput, Paper, Select, Space, TextInput } from '@mantine/core';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo } from '../../components/Logo';
import { Paths } from '../../routes/paths';
import ErrorMessage from '../Configuration/ErrorMessage';
import { boxStyles, buttonBoxStyles, formBoxStyles, paperStyles } from './Configuration.styles';
import { Header } from './Header/Header';
import { InfoCircle } from './Info/Info';
import { Rules } from './Rules/Rules';

export const Configuration = () => {
  const [nickname, setNickname] = useState('');
  const [contractType, setContractType] = useState<string | null>(null);
  const [toWorkDistance, setToWorkDistance] = useState<number | undefined>(2);
  const [acceptRules, setAcceptRules] = useState(false);
  const [dataProccesingAgreement, setDataProccesingAgreement] = useState(false);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const mandatoryInfo = { nickname, contractType, toWorkDistance };
      await axios.post(`${process.env.VITE_SERVER_URL}/api/scoring/users`, mandatoryInfo);
      navigate(Paths.Home);
    } catch (err) {
      if (err) setErrorDialogOpen(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[3],
        })}
        style={boxStyles}
      >
        <Paper
          style={paperStyles}
          sx={(theme) => ({
            boxShadow: theme.shadows.xl,
          })}
        >
          <Box>
            <Logo />
          </Box>

          <Box style={formBoxStyles}>
            <Box>
              <Header title="Skonfiguruj swoje konto" />
              <ErrorMessage message="Błąd" open={errorDialogOpen} setOpen={setErrorDialogOpen} />
              <Space h="xl" />;
              <Group>
                <TextInput
                  size="lg"
                  label="Pseudonim"
                  placeholder="Wybierz pseudonim"
                  required
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
                <InfoCircle info="Wybierz pseudonim który będzie identyfikować Cię w ramach firmy. Pseudonim będzie widoczny w rankingu." />
              </Group>
              <Space h="xl" />
              <Group>
                <Select
                  size="lg"
                  label="Rodzaj umowy"
                  placeholder="Wybierz rodzaj umowy"
                  required
                  value={contractType}
                  onChange={setContractType}
                  data={['Pełny etat', 'Inne']}
                />
                <InfoCircle info="Na podstawie wymiaru etatu, będzie rozliczana frekwencja rowerowa." />
              </Group>
              <Space h="xl" />
              <Group>
                <NumberInput
                  size="lg"
                  label="Długość drogi do pracy (km)"
                  precision={1}
                  decimalSeparator=","
                  min={2}
                  step={0.1}
                  required
                  value={toWorkDistance}
                  onChange={setToWorkDistance}
                />
                <InfoCircle info="Wskaż dystans między miejscem zamieszkania a miejscem pracy (min 2 km)." />
              </Group>
              <Space h="xl" />
              <Group>
                <Checkbox required checked={acceptRules} onChange={(event) => setAcceptRules(event.currentTarget.checked)} />
                <Rules />
              </Group>
              <Space h="xl" />
              <Checkbox
                required
                checked={dataProccesingAgreement}
                onChange={(event) => setDataProccesingAgreement(event.currentTarget.checked)}
                label="Wyrażam zgodę na przetwarzanie danych osobowych"
              />
            </Box>
          </Box>
          <Box style={buttonBoxStyles}>
            <Button type="submit" size="lg">
              ROZPOCZNIJ
            </Button>
          </Box>
        </Paper>
      </Box>
    </form>
  );
};
