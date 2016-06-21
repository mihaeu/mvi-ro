# Formelsammlung

## Kapitel 1 - Markovketten mit diskreter Zeit

|                                           |                                 |
| ----------------------------------------- | --------------------------------|
| Wahrscheinlichkeit für eine Zustandsfolge | $vec p_n=(P(X_n=0), P(X_n=1), P(X_n=2), ...)=vec p_n=vec p_(n-1) * P=vec p_0*P^n$|

### Prozessoren und Speicher

|                                         |                                  |
| --------------------------------------- |----------------------------------|
| Verfügbarkeit bei Prozessoren/Speichern | $V=pi_0$                         |
| Stretching Faktor                       | $S_A=T_A^(real)/T_A=n/m=n/(n-n(pi_("Warte-Zustand 1")+pi_("Warte-Zustand 2")+...))$|
| Leistung Bi vs. Mono                    | $T_Mono= 2 * T_A=(2*T_A) / T_A^(real)=2/S_A$|
| Bandbreite                              | $E(V_p)=m(1-(1-1/m)^p)$ wobei $m="Speichermodule"$ und $p="Prozessoren"$|

### Google Ranking

### Erzeuger/Verbraucher



## Kapitel 3 - Wartesysteme

| Kendall Notation |                                  |
| ---------------- | -------------------------------- |
| A                | Verteilung des Ankunftsprozesses |
| B                | Verteilung des Bedienprozesses   |
| s                | Anzahl Bedieneinheiten/Server    |
| c                | Größe Warteraum                  |
| p                | Populationsgröße                 |
| R                | Reihenfolge                      |

Mögliche Verteilungen: M(arkovsch), D(iskret), G(eneral)

### M/M/1

|                               |                                          |
| ----------------------------- | ---------------------------------------- |
| Verweilzeit                   | $V=W+S$                                  |
| Ankunftsrate                  | $\lambda=\frac{1}{Zwischenankunftsrate}$ |
| Bedienrate                    | $\mu=\frac{1}{\bar{S}}$                  |
| mittlere Bedienzeit           | $\bar{S}=\frac{1}{\mu}$                  |
| zeitl. Auslastung/Durchsatz   | $\rho=U=\frac{\lambda}{\mu}=\lambda\cdot\bar{S}=P("muss-warten")$ |
| mittlere Verweilzeit          | $\bar{V}=\frac{1}{\mu-\lambda}=\bar{S}\cdot\frac{1}{1-U}$ |
| mittlere Verweilzeit im Cache | $\bar{V}_{Cache}=\frac{Anzahl Blöcke}{\lambda\cdot(1-Trefferwskeit)}$ |
| mittlere Wartezeit            | $\bar{W}=\frac{\lambda}{\mu}\cdot\frac{1}{\mu-\lambda}=\bar{S}\cdot\frac{U}{1-U}$ |
| mittlere Anzahl im System     | $\bar{N}=\frac{U}{1-U}=\frac{\lambda}{\mu-\lambda}$ |
| mittlere Anzahl Wartender     | $\bar{N}_W=U^2\cdot\frac{1}{1-U}=\lambda\cdot \bar{W}$ |
| Verteilung Verweilzeit        | $F_V(x)=P(V\le x)=1-e^{-\frac{x}{\bar{V}}}$ für $x\ge 0​$ |
| p-Quantil                     | $x_p=-\bar{V}\cdot ln(1-p)$ für $0\ge p>1$ |

### M/M/s

|                           |                                          |
| ------------------------- | ---------------------------------------- |
| mittlere Verweilzeit      | $\bar{V}=\frac{1}{\mu}\cdot\frac{1}{1-\rho^k}$ |
| zeitl. Auslastung         | $\rho=\frac{\lambda}{\mu\cdot k}=U\cdot k$ |
| mittlere Anzahl im System | $\bar{N}=\frac{l\cdot \rho}{1-\rho^k}$   |
| mittlere Anzahl Wartender | $\bar{N}_W=\frac{k\cdot\rho^{k+1}}{1-\rho^k}$ |
| mittlere Wartezeit        | $\bar{W}=\bar{V}-\frac{1}{\mu}=\frac{1}{\mu}\cdot\frac{\rho^k}{1-\rho^k}-\frac{1}{\mu}=\frac{1}{\mu}\cdot\frac{1}{1-\rho^k}$ |

### M/G/1

|                    |                                          |
| ------------------ | ---------------------------------------- |
| mittlere Wartezeit | $\overline{W}_G=\frac{\lambda(1+c^2)}{2\cdot\mu(\mu-\lambda)}=\bar{S}\frac{U\cdot(1+c^2)}{2(1-U)}$ |

### M/D/1

|                    | $c=0$                                    |
| ------------------ | ---------------------------------------- |
| mittlere Wartezeit | $\overline{W}_D=\frac{\bar{S}\cdot U}{2\cdot(1-U)}$ |

### M/M/s/0

|                           |                                          |
| ------------------------- | ---------------------------------------- |
| Angebot                   | $a=\frac{\lambda}{\mu}$                  |
| Verlustwahrscheinlichkeit | $\pi_s=\frac{\frac{a^n}{n!}}{\sum^n_{1=0}\frac{a^i}{i!}}$ |