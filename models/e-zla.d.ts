export interface IEZla {
    I: {
        p1: {
            p1: string; //Seria
            p2: string; //Numer
        },
        p2: string; //Oryginał/Kopia
    },
    II: {
        p1: string; //Pesel
        p2: string; //Imię
        p3: string; //Nazwisko
        p4: string; //Instytucja ubezpieczająca
        p5: string; //Paszport
        p6: Date; //Data urodzenia
    },
    III: {
        p1: string; //kod pocztowy
        p2: string; //miejscowość
        p3: string; //ulica
        p4: string; //nr domu
        p5: string; //nr mieszkania
        p6: string; //kod państwa
        p7: string; //nazwa państwa
        p8: string; //zagraniczny kod pocztowy
    },
    IV: {
        p1: {
            p1: Date; //niezdolość do pracy data od
            p2: Date; //niezdidolność do pracy data do
        }
        p2: {
            p1: Date; //szpital data od
            p2: Date; //szpital data do
        }
        p3: string; //wskazanie lekarskie
        p4: string; //Kod
        p5: string; //Kod
        p6: string; //Kod
        p7: string; //Kod
        p8: string; //Numer statystyczny choroby
        p9: {
            p1: number; //kod pokrewienstwa osoby pod opieką
            p2: Date; //data urodzenia osoby pod opieką
        }
    }, 
    V: {
        p1: number; //rodzaj id płatnika(1-nip,2-pesel,3-paszport) 
        p2: string; //identyfikator płatnika (zależne od pola V/p1
    },
    VI: {
        p1: string; //nazwa skrócona
        p2: string; //kod pocztowy (bez myślnika)
        p3: string; //miejscowość
        p4: string; //ulica
        p5: string; //numer domu
        p6: string; //numer mieszkania
    }, 
    VII: {
        p1: number; //numer prawa wyk. Zawodu
        p2: string; //imię lekarza
        p3: string; //nazwisko lekarza
    },
    VIII: {
        p1: Date; //data wystawienia dokumentu (data badania)
        p2: Date; //data elektronizacji dokumentu (data podpisu)
        p3: string; //Uzasadnienie wstecznego wystawienia ZLA
        p4: {
            p1: string; //seria anulowanego
            p2: string; //numer anulowanego
        },
        p5: {
            p1: string; //seria powiązanego ZLA
            p2: string; //numer powiązanego ZLA
        },
        p6: boolean; //pobyt w stacjonarnym ZOZ
        p7: boolean; //nie przesyłaj informacji płatnikowi(true - nie przesyłaj, false - przesyłaj)
        p8: number; //NIP PWDL
    }
}