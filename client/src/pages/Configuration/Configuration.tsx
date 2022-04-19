import { Box, Button, Checkbox, Group, NumberInput, Paper, Select, Space, TextInput } from '@mantine/core';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo } from '../../components/Logo';
import { Paths } from '../../routes/paths';
import { Header } from './Header/Header';
import { InfoCircle } from './Info/Info';
import { Rules } from './Rules/Rules';

export const Configuration = () => {
  const [username, setUsername] = useState('');
  const [surname, setSurname] = useState('');
  const [nickname, setNickname] = useState('');
  const [contractType, setContractType] = useState('');
  const [toWorkDistance, setToWorkDistance] = useState(2);
  const [acceptRules, setAcceptRules] = useState(false);
  const [dataProccesingAgreement, setDataProccesingAgreement] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const mandatoryInfo = { username, surname, nickname, contractType, toWorkDistance };

    await axios.post(`${process.env.VITE_SERVER_URL}/api/users/`, mandatoryInfo);
    navigate(Paths.Home);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[3],
          height: '100vh',
          width: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <Paper
          sx={(theme) => ({
            width: '80rem',
            height: '53rem',
            display: 'grid',
            gridTemplateColumns: '1fr 3fr 1fr',
            padding: '3rem',
            boxShadow: theme.shadows.xl,

            '@media (max-width: 755px) and (min-width: 200px)': {
              gridTemplateColumns: '1fr',
              gridGap: '5px',
              width: '95%',
              height: '97%',
              padding: '40px 20px',
            },
          })}
        >
          <Box>
            <Logo />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box>
              <Header title="Skonfiguruj swoje konto" />
              <Space h="xl" />

              <Group grow mb="md" mt="md">
                <TextInput
                  size="md"
                  placeholder="Wpisz imię"
                  label="Imię"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <TextInput
                  size="md"
                  placeholder="Wpisz nazwisko"
                  label="Nazwisko"
                  value={surname}
                  required
                  onChange={(e) => setSurname(e.target.value)}
                />
              </Group>
              <Space h="xl" />
              <Group>
                <TextInput
                  size="md"
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
                  size="md"
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
                  size="md"
                  label="Długość drogi do pracy"
                  precision={1}
                  decimalSeparator=","
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
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}
          >
            <Button type="submit" color="yellow" size="lg">
              ROZPOCZNIJ
            </Button>
          </Box>
        </Paper>
      </Box>
    </form>
  );
};
