import { Button, Modal, ScrollArea, Text, Title, TypographyStylesProvider } from '@mantine/core';
import { useState } from 'react';

export const Rules = () => {
  const [opened, setOpened] = useState(false);

  const modalTitle = () => {
    return <Title order={3}>Regulamin Kampanii „Rowerem do pracy”</Title>;
  };

  return (
    <>
      <Modal size="60vw" opened={opened} onClose={() => setOpened(false)} title={modalTitle()}>
        <ScrollArea style={{ height: 700 }}>
          <TypographyStylesProvider>
            <Text size="md" sx={{ whiteSpace: 'pre-line' }}>
              <Title order={4}>§ 1 Postanowienia ogólne</Title>
              <Text>
                1. Niniejszy regulamin, zwany dalej „Regulaminem”, określa zasady udziału w Kampanii „Rowerem do pracy, czyli dom, rower,
                praca…i tak w kółko”.
              </Text>
              <Text>
                2. Organizatorem Kampanii jest Wydział Gospodarki Komunalnej i Klimatu Urzędu Miasta Krakowa, zwany dalej GK, z siedzibą
                przy ul. Wielopole 17a, 31-072 Kraków.
              </Text>
              <Text>
                3. Wszyscy Przedsiębiorcy/Wydziały/Biura, o których mowa poniżej, nazywani są w dalszej części Regulaminu Podmiotami.
              </Text>
              <Title order={4}>§ 2 Cel Kampanii i jej charakter</Title>
              <Text>
                1. Celem Kampanii jest promowanie roweru jako codziennego środka transportu wykorzystywanego w trakcie podróży do i z pracy.
                Kampania skierowana jest w ramach działań na rzecz zrównoważonego transportu i mobilności, a także walki ze zmianami
                klimatu, do mieszkańców Krakowa i pracowników krakowskich oraz podkrakowskich przedsiębiorców, instytucji itp., to jest
                osób, które na co dzień mają znaczący wpływ na sytuację transportową w Krakowie.
              </Text>
              <Text>
                2. Adresatami Kampanii są wszyscy pracownicy zgłoszonych do Kampanii Podmiotów zatrudniających na terenie Krakowa lub w jego
                okolicach min. 20 pracowników. Bez znaczenia dla możliwości udziału w Kampanii ma forma zatrudnienia/współpracy z danym
                Podmiotem, tzn. dopuszcza się np. umowy cywilnoprawne czy współpracę na zasadzie długoterminowego stażu. Istotne jest, aby
                świadczenie pracy/stażu/usług miało miejsce w siedzibie Podmiotu.
              </Text>
              <Text>
                3. W przypadku Urzędu Miasta Krakowa (UMK) zgłoszenia przyjmowane są odrębnie z każdego Wydziału/Biura (tzw. Komórki).
              </Text>
              <Text>4. Kampania opiera się na wzajemnym zaufaniu Organizatora i uczestników.</Text>
              <Title order={4}>§ 3 Czas trwania Kampanii</Title> 1. Kampania rozpoczyna się 1 maja 2022 r. i trwa do 30 listopada 2022 r.
              Organizator może skrócić lub wydłużyć czas trwania Kampanii.
              <Text>
                2. Uczestnicy w ramach danego Podmiotu mogą dołączyć do Kampanii w trakcie jej trwania w momencie wskazanym przez
                Koordynatora wewnętrznego, o którym mowa w § 6.
              </Text>
              <Text>
                3. O wcześniejszym zakończeniu Kampanii lub jej wydłużeniu Organizator poinformuje niezwłocznie wszystkich Koordynatorów
                wewnętrznych.
              </Text>
              <Title order={4}>§ 4 Warunki udziału w Kampanii</Title>
              1. Zgłoszenie Podmiotu do Kampanii i udział w niej jest jednoznaczny z akceptacją niniejszego Regulaminu.
              <Text>
                2. Udział w Kampanii i udostępnienie jakichkolwiek danych na temat zgłoszonego Podmiotu, a zwłaszcza podanie nazwy Podmiotu
                i jego adresu na potrzeby realizacji Kampanii jest całkowicie dobrowolne.
              </Text>
              <Text>
                3. Udział danego Podmiotu w Kampanii oznacza automatyczną zgodę na zamieszczenie nazwy Podmiotu w artykułach promujących
                Kampanię (publikowanych np. na stronie www.krakow.pl czy w dwutygodniku miejskim Krakow.pl).
              </Text>
              <Text>
                4. Pracownicy Urzędu Miasta Krakowa biorący udział w Kampanii wyrażają zgodę na pobranie podatku dochodowego od wartości
                wszystkich otrzymanych upominków. Wartość należnego podatku będzie naliczana przez Wydział Finansowy i będzie pomniejszać
                miesięczne wynagrodzenie pracownika. Pracownik UMK może odmówić przyjęcia upominku. W takiej sytuacji podatek nie zostanie
                naliczony i potrącony.
              </Text>
              <Text>5. Organizator może ograniczyć liczbę Podmiotów dopuszczonych do udziału w Kampanii.</Text>
              <Text>
                6. Organizator może wyrazić zgodę na przystąpienie do Kampanii kolejnych Podmiotów w trakcie jej trwania we wskazanym
                momencie.
              </Text>
              <Text>
                7. Organizator może uwarunkować udział w Kampanii danego Podmiotu lub termin jego przystąpienia do Kampanii od udziału w
                spotkaniu informacyjnym (organizowanym stacjonarnie lub on-line) Koordynatora wewnętrznego lub innego przedstawiciela
                Podmiotu.
              </Text>
              <Text>
                8. Podmioty zobowiązują się do wykorzystania materiałów przekazanych przez Organizatora na rzecz promocji Kampanii wśród
                swoich pracowników. Użycie dodatkowo jakichkolwiek innych materiałów (np. plakatów) w celu promocji Kampanii wymaga zgody
                Organizatora. Organizator ma prawo odmówić wyrażenia zgody na wykorzystanie innych materiałów w ramach popularyzacji
                Kampanii lub narzucić naniesienie stosownych zmian w materiałach. W przypadku niezastosowania się do niniejszego zapisu
                Organizator ma prawo wykluczyć dany Podmiot z Kampanii.
              </Text>
              <Title order={4}>§ 5 Obowiązki zgłoszonych do Kampanii Podmiotów</Title> 1. Podmioty zobowiązują się do współpracy z
              Organizatorem, która pozwoli na sprawne przeprowadzenie Kampanii z pożytkiem dla jej Uczestników ze szczególnym uwzględnieniem
              promocji Kampanii wśród pracowników danego Podmiotu oraz poza nim.
              <Text>2. Podmioty zobowiązują się do wyznaczenia Koordynatorów wewnętrznych Kampanii i ich zastępców. </Text>3. W przypadku
              UMK Koordynatorzy wewnętrzni wybierani są w każdej zgłoszonej Komórce.
              <Text>
                4. Podmioty przyjmują do wiadomości, że udział w Kampanii wiąże się z wymogami dotyczącymi m.in. comiesięcznego raportowania
                przejazdów, odbioru i dystrybucji upominków.
              </Text>
              <Text>
                5. Podmiot niezwłocznie poinformuje Organizatora w przypadku wycofania się z Kampanii, zmiany Koordynatora wewnętrznego itp.
              </Text>
              <Title order={4}>§ 6 Obowiązki Koordynatorów wewnętrznych</Title>{' '}
              <Text>
                1. Koordynatorzy wewnętrzni zobowiązują się do stałej współpracy z Organizatorem na potrzeby przeprowadzenia Kampanii, w tym
                w szczególności do: - wyznaczenia w danym Podmiocie sposobu rejestrowania przejazdów przez Uczestników Kampanii, - pomocy w
                przeprowadzeniu ankiet, o których mowa w § 8, wśród Uczestników Kampanii, - raportowania zbiorczych wyników za wskazany
                okres w ciągu 8 dni roboczych od jego zakończenia z wykorzystaniem arkusza kalkulacyjnego przekazanego przez Organizatora, -
                wewnętrznej weryfikacji rzetelności procesu rejestracji przejazdów, jeśli nastąpi taka potrzeba, - odbioru w wyznaczonym
                przez Organizatora terminie upominków i ich dystrybucji wśród nagrodzonych Uczestników Kampanii (Koordynator i Organizator
                mogą ustalić za obopólną zgodą inny tryb odbioru i dystrybucji upominków), - wyznaczenia Zastępcy, który przejmie
                koordynację nad Kampanią, w tym wszystkie obowiązki związane z jej prowadzeniem, na czas swojej nieobecności z powodu np.
                urlopu.
              </Text>
              <Text>
                2. Koordynatorzy wewnętrzni są zobowiązani do podania danych osobowych, to jest swojego imienia i nazwiska, służbowego
                telefonu (ów) i służbowego adresu e-mailowego na potrzeby kontaktu z Organizatorem akcji w celu realizacji Kampanii, działań
                jej towarzyszących (np. spotkań edukacyjnych, wycieczek i przejazdów rowerowych) i innych działań realizowanych przez Gminę
                Miejską Kraków na rzecz promocji zrównoważonej mobilności, ruchu rowerowego, fizycznej aktywności rekreacyjnej, walki ze
                zmianami klimatu itp. Wyżej wymienione dane nie będą wykorzystywane do innych celów. Podanie danych jest dobrowolne i
                niezbędne do przystąpienia do Kampanii. Administratorem danych osobowych jest Prezydent Miasta Krakowa z siedzibą pl.
                Wszystkich Świętych 3-4, 31-004 Kraków.
              </Text>
              <Title order={4}>§ 7 Obowiązki Uczestnika</Title>
              Kampanii Uczestnik Kampanii zobowiązuje się do: - wybrania pseudonimu na potrzeby rejestracji przejazdów, który będzie
              jednoznacznie identyfikował go w ramach danego Podmiotu, - współpracy z Organizatorem i Koordynatorami wewnętrznymi w celu
              sprawnego przeprowadzenia Kampanii, - rzetelnego i uczciwego rejestrowania przejazdów w sposób wybrany w ramach swojego
              Podmiotu pod wybranym pseudonimem, - do wypełnienia ankiet, o których mowa w § 8.
              <Title order={4}>§ 8 Ankiety</Title> 1. Uczestnicy Kampanii zobowiązują się do wypełnienia ankiet przygotowanych przez
              Organizatora. Organizator planuje przeprowadzenie ankiet maks. 5 razy w trakcie trwania Kampanii lub po jej zakończeniu.
              Ankiety będą przede wszystkim związane z Kampanią i podróżowaniem do pracy i co do zasady będą miały formę elektroniczną.
              <Text>
                2. W przypadku problemów z wypełnieniem ankiety w formie elektronicznej w miejscu pracy (np. z uwagi na ograniczenia
                związane z zabezpieczeniami systemów informatycznych) Podmiot i Koordynator wewnętrzny zobowiązują się do pozyskania
                odpowiedzi od Uczestników Kampanii w inny sposób (np. z wykorzystaniem ankiety w formie papierowej przygotowanej przez
                Organizatora).
              </Text>
              <Text>
                3. Organizator może wykluczyć Podmiot w przypadku zbyt niskiego zwrotu z ankiet z udziału w dalszej części Kampanii.
              </Text>
              <Title order={4}>§ 9 Prawa i obowiązki Organizatora</Title>
              <Text>
                1. Organizator zobowiązuje się do: - zapewnienia upominków dla najaktywniejszych Uczestników biorących udział w Kampanii
                przez cały okres jej trwania, - dostarczenia Koordynatorom wewnętrznym materiałów niezbędnych do promowania Kampanii i jej
                przeprowadzenia, - przekazania upominków Koordynatorom wewnętrznym lub innym przedstawicielom danego Podmiotu w celu ich
                dalszej dystrybucji wśród nagrodzonych pracowników.
              </Text>
              <Text>
                2. Organizator zastrzega sobie prawo do wykluczenia w dowolnym momencie z dalszego udziału w Kampanii Podmiotów, w przypadku
                których istnieją stosowne z punktu widzenia Organizatora przesłanki świadczące o braku zasadności kontynuacji Kampanii w
                ramach danego Podmiotu.
              </Text>
              <Text>
                3. Przykładową sytuacją może być udział w Kampanii zbyt małej liczby Uczestników reprezentujących dany Podmiot. O swojej
                decyzji Organizator powiadomi niezwłocznie Koordynatorów wewnętrznych.
              </Text>
              <Text>
                4. Organizator zastrzega sobie prawo do wykluczenia z udziału w Kampanii Uczestników, których działania są sprzeczne z
                prawem, dobrymi obyczajami lub niniejszym Regulaminem.
              </Text>
              <Text>
                5. W celu wyjaśnienia wątpliwości związanych z aktywnością Uczestnika w Kampanii Organizator może kontaktować się z
                Koordynatorami wewnętrznymi lub bezpośrednio z Uczestnikiem (tylko w przypadku, gdy jest to zgodne z polityką danego
                Podmiotu) za pomocą otrzymanych od Koordynatorów wewnętrznych za zgodą Uczestnika środków komunikacji (e-mail, telefon) oraz
                może wymagać od Uczestnika podania informacji dotyczących jego udziału w Kampanii w celu wyjaśnienia ewentualnych
                wątpliwości.
              </Text>
              <Title order={4}>§ 10 Zasady rejestracji przejazdów </Title>
              <Text>
                1. Rejestracji w Kampanii podlegać będą tylko przejazdy rowerowe dokonywane w trakcie podróży do i z pracy, to jest: - na
                trasie między miejscem zamieszkania a siedzibą Podmiotu oraz trasie powrotnej lub - na trasie między miejscem wskazanym
                przez uczestnika jako start podróży rowerowej a siedzibą Podmiotu oraz trasie powrotnej.
              </Text>
              <Text>
                2. Uczestnik Kampanii zobowiązany jest do wskazania dystansu na trasie między miejscem zamieszkania a siedzibą Podmiotu lub
                dystansu na trasie między miejscem startu podróży rowerowej a siedzibą Podmiotu. Dystans ten zostanie obliczony przez
                Uczestnika za pomocą powszechnie dostępnych narzędzi internetowych/aplikacji. Zapis dotyczy również Uczestników, którzy będą
                rejestrować przejazdy rowerowe za pomocą aplikacji/narzędzi zapisujących automatycznie trasę przejazdu.
              </Text>
              <Text>
                3. W Kampanii mogą brać udział Uczestnicy, których dystans między miejscem zamieszkania/startu Podróży a siedzibą Podmiotu
                (zwanym dystansem w jedną stronę), obliczony na zasadach, o których mowa w pkt. 2, wynosi min. 2 km.
              </Text>
              <Text>
                4. Trasa, o której mowa w pkt. 2, jest co do zasady trasą regularnie wybieraną przez Uczestnika w trakcie dojazdu na rowerze
                do i z pracy.
              </Text>
              <Text>
                5. Jednego dnia Uczestnik może odbyć jeden lub dwa przejazdy rowerowe, które podlegają rejestracji w Kampanii, to jest na
                trasie miejsce zamieszkania/start podróży rowerowej – siedziba Podmiotu i z powrotem.
              </Text>
              <Text>
                6. Klasyfikacja rowerowa będzie dotyczyła przede wszystkim frekwencji rowerowej, to jest liczby zarejestrowanych przejazdów
                rowerowych w danym okresie w stosunku do wszystkich możliwych podróży rowerowych w danym okresie.
              </Text>
              <Text>
                7. Dla usprawnienia systemu raportowania do możliwych przejazdów rowerowych wlicza się także okres nieobecności danego
                pracownika, w tym okres urlopu wypoczynkowego czy zwolnienia lekarskiego (tzn. okres nieobecności traktowany jest tak, jakby
                pracownik był w pracy). Szczegółowe informacje nt. raportowania przejazdów zawarte są w załączniku do Regulaminu.
              </Text>
              <Text>
                8. Uczestnik Kampanii jest zobowiązany do rejestrowania przejazdów za dany okres na zasadach określonych przez Koordynatora
                wewnętrznego.
              </Text>
              <Text>
                9. Przejazdy mogą być rejestrowane w dni robocze funkcjonujące w danym Podmiocie. Jeśli w danym Podmiocie pracownicy
                świadczą pracę w dni niestandardowe (w soboty, niedziele i/lub święta), przejazdy w te dni także należy rejestrować.
                Zadaniem Koordynatora wewnętrznego jest każdorazowe poinformowanie Organizatora w ramach składanego raportu o pracy w
                niestandardowe dni.
              </Text>
              <Text>
                10. Rejestracji mogą podlegać przejazdy wykonane rowerem jako wyłącznym środkiem transportu bądź przejazdy łączone (rower -
                pociąg, rower – tramwaj/autobus/bus, rower - samochód itp.). W przypadku przejazdów łączonych klasyfikacji podlega jedynie
                odcinek przejechany na rowerze, a minimalny odcinek, jaki Uczestnik musi pokonać na rowerze w przypadku przejazdów
                łączonych, aby móc zarejestrować pojedynczy przejazd, wynosi 2 km.
              </Text>
              <Text>
                11. W sytuacji, gdy pracownik rozpoczyna/kończy danego dnia pracę w innym niż zazwyczaj miejscu (np. przy okazji spotkania
                służbowego czy szkolenia) i dojeżdża na nie/wraca z niego na rowerze, rejestruje podróż wykazując dystans między miejscem
                zamieszkania/startu podróży rowerowej a siedzibą Podmiotu.
              </Text>
              <Text>
                12. W sytuacji, gdy pracownik - jadąc do pracy lub z niej wracając - wykonuje po drodze czynności dodatkowe typu zakupy,
                wizyta u lekarza, trening na siłowni itp. i pokonuje w ten sposób dystans inny niż ten, w którym mowa w pkt. 2, rejestruje
                podróż wykazując dystans między miejscem zamieszkania/startu podróży rowerowej a siedzibą Podmiotu.
              </Text>
              <Text>
                13. Integralną częścią Regulaminu jest załącznik, który stanowi instrukcję raportowania przejazdów rowerowych z
                uwzględnieniem różnych przypadków (pełny i niepełny wymiar czasu pracy, praca zdalna, zwolnienia lekarskie, urlopy itp.) z
                wyszczególnieniem przypadków i stosownymi przykładami.
              </Text>
              <Title order={4}>§ 11 System nagradzania i upominki</Title> 1. Upominki zostaną przyznane Uczestnikom Kampanii, którzy we
              wskazanym przez Organizatora okresie wykażą się wysoką frekwencją rowerową. Frekwencja rowerowa jest zaokrąglana do pierwszego
              miejsca po przecinku.
              <Text>
                2. Organizator dołoży starań, żeby upominki rozdawane były według następujących przedziałów frekwencji rowerowej: 1) 100% -
                85%, 2) 84,9% - 70%, 3) 69,9% - 55%, 4) 54,9% - 40%, 5) 39,9% - 25% lub zbliżonych. O zasięgu przedziałów w danym miesiącu
                oraz ich liczbie decyduje Organizator.
              </Text>
              <Text>
                3. Organizator będzie przyznawał zróżnicowane upominki w zależności od wysokości frekwencji rowerowej Uczestników zgodnie z
                zapisami pkt. 2. Organizator dołoży starań, żeby nagrodzić drobnymi upominkami jak największą grupę Uczestników.
              </Text>
              <Text>
                4. Organizator może według swojego uznania przyznać dowolne upominki także pozostałym Uczestnikom oraz nagrodzić Uczestników
                dodatkowo stosując wybrane przez siebie kryteria (np. nagrodzić osoby, które osiągnęły wskazaną minimalną frekwencję
                rowerową oraz wykazują minimalny wskazany dystans do pokonania między miejscem zamieszkania/startem podróży a siedzibą
                Podmiotu).
              </Text>
              <Text>
                5. Organizator może przeznaczyć dodatkową pulę nagród np. do rozlosowania wśród wszystkich lub wybranych uczestników
                Kampanii z danej grupy Podmiotów (np. wśród uczestników z 15 Podmiotów, w których zanotowano najwyższą średnią frekwencję
                rowerową).
              </Text>
              <Text>
                6. Do przykładowych upominków należą m.in.: bilety do kina, zestawy upominków (np. akcesoriów rowerowych typu zapięcie
                rowerowe), karty podarunkowe do sieci: drogerii, sklepów spożywczych, kawiarni, księgarni, kupony do sklepów rowerowych lub
                sportowych, kupony do restauracji. Organizator będzie przydzielał upominki ze względu na ich poziom atrakcyjności do
                przedziałów frekwencji rowerowej według własnego uznania.
              </Text>
              <Text>
                7. Organizator ma prawo wymienić przykładowe upominki na inne bez uzgodnienia z Uczestnikami Kampanii. Wybór upominków leży
                w gestii Organizatora. Organizator ma zupełną dowolność w podejmowaniu decyzji o jakości i rodzaju przyznawanych upominków
                czy frekwencji rowerowej podlegającej nagrodzie. Organizator może wyrazić zgodę na przyznanie upominków na zasadzie wyboru
                ze strony Uczestników.
              </Text>
              <Text>
                8. Organizator dołoży starań, aby upominki przekazywane były przedstawicielom Podmiotów bez zbędnej zwłoki. Organizator ma
                prawo w wyjątkowych sytuacjach przekazywać upominki w trybie rzadszym niż miesięczny.
              </Text>
              <Text>
                9. Upominek uważa się za dostarczony obdarowanemu Uczestnikowi Kampanii w momencie jego przekazania przez Organizatora
                właściwemu Koordynatorowi wewnętrznemu lub osobie przez niego wskazanej (także w sposób niebezpośredni, o którym mowa w § 12
                pkt.1).
              </Text>
              <Text>
                10. Uczestnik nie ma możliwości zamiany upominku na inny (chyba, że Organizator postanowi inaczej), ani na ekwiwalent
                pieniężny.
              </Text>
              <Text>11. Decyzja Organizatora o obdarowaniu Uczestników Kampanii jest ostateczna i nie przysługuje od niej odwołanie. </Text>
              <Text>
                12. W przypadku nieotrzymania raportu za wskazany okres w terminie 8 dni roboczych od jego zakończenia od danego Podmiotu
                Organizator zastrzega sobie prawo do nieuwzględnienia wyników danego Podmiotu i nieprzyznania Upominków za dany okres
                Uczestnikom.
              </Text>
              <Text>
                13. W przypadku nieodebrania upominków przez przedstawiciela danego Podmiotu za wskazany okres w terminie 10 dni roboczych
                od otrzymania od Organizatora informacji o takiej możliwości, Organizator zastrzega sobie prawo do niewydania upominków w
                terminie późniejszym. W takiej sytuacji upominki wrócą do ogólnej puli.
              </Text>
              <Text>
                14. W przypadku powtarzających się opóźnień w odbiorze upominków ze strony Podmiotu Organizator może wykluczyć dany Podmiot
                z dalszego udziału w Kampanii.
              </Text>
              <Title order={4}>§ 12 Postanowienia końcowe</Title>{' '}
              <Text>
                1. Organizator nie ponosi odpowiedzialności za: - skutki prawne działań podjętych przez Podmiot na rzecz przeprowadzenia
                Kampanii wśród swoich pracowników, w tym za ewentualne konsekwencje prawne wynikające z korzystania z aplikacji lub innych
                narzędzi elektronicznych na potrzeby rejestracji przejazdów, - następstwa działań lub zdarzeń będących konsekwencjami
                uczestnictwa w Kampanii (np. odpowiedzialność odszkodowawcza, konsekwencje zdrowotne, prawne, finansowe, szkody na mieniu i
                ciele, zniszczenia, kradzieże itp.), - zaginięcie/zniszczenie upominków w przypadku przekazania upominków Koordynatorowi
                wewnętrznemu w sposób inny niż bezpośredni (niebezpośredni sposób przekazania upominków może być uzgodniony między
                Organizatorem a Koordynatorem wewnętrznym na prośbę Koordynatora wewnętrznego), - przebieg Kampanii w ramach danego Podmiotu
                (np. za jej promocję), w tym za pracę Koordynatorów wewnętrznych.
              </Text>
              <Text>
                2. Organizator zaleca udział w Kampanii z uwzględnieniem możliwości zdrowotnych i fizycznych każdego z Uczestników.
              </Text>
              <Text>
                3. Organizator dopuszcza zmianę niniejszego Regulaminu, jeśli zaistnieją do tego stosowne przesłanki. O takiej zmianie
                Organizator poinformuje Koordynatorów wewnętrznych w najkrótszym możliwym terminie.
              </Text>
              <Text>
                4. Prawo do podjęcia decyzji w sprawach nieuregulowanych niniejszym Regulaminem oraz prawo do interpretacji zapisów
                Regulaminu posiada Organizator.
              </Text>
            </Text>
          </TypographyStylesProvider>
        </ScrollArea>
      </Modal>
      <Button sx={{ padding: 0 }} variant="subtle" onClick={() => setOpened(true)}>
        Akceptuję regulamin konkursu
      </Button>
    </>
  );
};
