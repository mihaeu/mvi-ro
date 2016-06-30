# Formelsammlung

## Allgemein 

|                    |                                 |
| ------------------ | --------------------------------|
| geometrische Reihe für Teilsummen | $s_n = sum_(k=0)^n q^k = (1-q^(n+1)) / (1-q)$, falls $q ne 1$ |
| geometrische Reihe für Grenzwert | $sum_(k=0)^oo q^k = 1/(1-q)$, konvergiert falls $ \|q\|<1 $, sonst divergiert sie |

## Kapitel 1 - Markovketten mit diskreter Zeit

|                                           |                                 |
| ----------------------------------------- | --------------------------------|
| Wahrscheinlichkeit für eine Zustandsfolge | $vec p_n=(P(X_n=0), P(X_n=1), P(X_n=2), ...)=vec p_n=vec p_(n-1) * P=vec p_0*P^n$|
||$P(A \| B)=(P(A uu B))/(P(B))$|
||$P(A nn B)=P(B nn A) * P(B)$|
||$P(x_2 = ? \| x_1=?, x_0=?)=P(x_2=?\|x_1=?)$|
||$P(x_2=?,x_1=?\|x_0=?)= $P(x_2 = ? \| x_1=?, x_0=?) * $P(x_1=?, x_0=?)$|
||$$|
|Gleichgewicht|$pi_j=sum_(i=0)^oo pi_i * p_(ij)$|
||$vec pi=vec pi * P$|

### Prozessoren und Speicher

|                                         |                                  |
| --------------------------------------- |----------------------------------|
| Verfügbarkeit bei Prozessoren/Speichern | $V=pi_0$                         |
| Stretching Faktor                       | $S_A=T_A^(real)/T_A=n/m=n/(n-n(pi_("Warte-Zustand 1")+pi_("Warte-Zustand 2")+...))$|
| Leistung Bi vs. Mono                    | $T_(Mono)= 2 * T_A=(2*T_A) / T_A^(real)=2/S_A$|
| Bandbreite                              | $E(V_p)=m(1-(1-1/m)^p)$ wobei $m="Speichermodule"$ und $p="Prozessoren"$|
||$T_(Bi)/T_(Mono)=T^**/(2T)=S/2$|

### Google Ranking

### Erzeuger/Verbraucher

### Rekurrenz

|                                         |                                  |
| --------------------------------------- |----------------------------------|
| Zeitschritte bis ich wieder in i bin    | $R_i=1/pi_i$ |


### Bestellpolitik

|  |                                  |
| ---------------- | -------------------------------- |
| Mittlerer Lagerbestand         | $Q/2$  |
|aktueller Lagerbestand| $L(t) = Q-r * t$ <br> $L(t_0)=0$ <br> $t_0=Q/r$|
|Durchschnittskosten pro Zeit|$D(Q)=Q/2 * h + Kr/Q$|
|Lagergrößenformel für min. Kosten| $root ()((2 * r * k) / h)$ |
| Mittlerer Lagerbestand         | $bar L = sum_(i=0)pi_0$  |

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

### M/M/s/0

|                           |                                          |
| ------------------------- | ---------------------------------------- |
| Angebot                   | $a=lambda/mu$                  |
| Verlustwahrscheinlichkeit | $pi_s=(a^n/(n!))/( sum_(i=0)^n a^i/(i!))$ |

### M/G/1

|                           |                                          |
| ------------------------- | ---------------------------------------- |
|Variationskoeffizient      | $c^2=(Var(S))/(bar S^2)$ |
|mittlere Bedienzeit        | $bar S = 1/mu$|
|mittlere Wartezeit         | $bar W_G=(lambda * (1+c^2))/(2 * mu * (mu - lambda))=bar S * (U * (1+c^2))/(2 * (1-U))$ |
|$bar(S^2)$                 | $bar(S^2) = Var(S) + bar S^2 = (1 + c^2) * bar S^2$ |
|mittlere Verweilzeit       | $bar V = bar S + bar W = bar S + (lambda * bar S^2)/(2 * (1 - rho))=bar S * (1 + (1+c^2)/(2) * (rho)/(1-rho))$ |
|mittlere Anzahl Wartender  | $bar N_W=lambda * bar W = = (lambda^2 * bar S^2)/(2(1-rho))=(1+c^2)/2 * rho^2/(1-rho)$ |
|mittlere Anzahl im System  | $lambda * bar V = lambda * bar S + (lambda^2 * bar S^2)/(2(1-rho))=rho + (1+c^2)/2 * rho^2/(1-rho)$ |

 - Mittelwerte nehmen linear mit der Varianz zu
 - die Formeln sind ähnlich zu M/M/1, der einzige Unterschied ist der Extra-Faktor $(1+c^2)/2$

### M/D/1

| Spezialfall von M/G/1 (c=0) |                                        |
| ------------------------- | ---------------------------------------- |
|mittlere Wartezeit         | $bar W_D=lambda/(2 * mu * (mu-lambda))=(bar S * U)/(2 * (1 - U))$ |
|||

### Wartenetze offen

|                                         |                                  |
| --------------------------------------- |----------------------------------|
| Typ 1 für Platten, RAID; allg. E-A Geräte | $M//M//m//oo//oo//"FCFS"$ |
| Typ 2 für CPUs mit Prozessor Sharing | $M//G//1//oo//oo//"PS"$ |
| Typ 3 für infinite Server "IS", Terminals, allg. Wartezustände,  Prozesssynchronisation |$M//G//oo$|
| Ankunftsrate Knoten i                                        | $lambda_i = lambda_(0,1) + sum_(j=1)^k p_(j,i) * lambda_j$, $i=1, ..., k$ oder $lambda_i=e_i * X$|
| Durchsatz des Gesamtnetzes                           | $X=("Anzahl bearbeiteter Aufträge")/(Zeit)=sum_(i=1)^k lambda_(0,1)$, falls $U_i < 1$ |
|Besuchshäufigkeit, mittl. Anzahl Besuche | $e_i=lambda_i/X$ |
|mittlere Verweilzeit | $bar V = e_i * V_i + e_(i+1) * V_(i+1) + ...$ |
|Auslastung Knoten i| $U_i = lambda_i/mu_i$, bei Typ 1 und 3 $U_i = lambda_i/(m_i * mu_i)$ bei Typ 2 |
|mittlere Verweilzeit am Knoten i|$bar V_i=1/mu_i * 1/(1-U_i^m)$ für Typ 1 und 2 $bar V_i=1/mu_i$ für Typ 3|
|mittlere Anzahl Knoten im Netz|$bar N=X * bar V$|
|reine Bedienzeit ohne Wartezeit im Netz|$bar S = e_i * bar S_1 + e_2 * bar S_2 + ...$|
|Gesamtanforderung, "demand"	| $bar D_i = e_i * bar S_i$ |

---
|										|		|		|		|
|---------------------------------------|-------|-------|-------|
|  										| M/M/1 | M/M/k | Typ3, "IS" |
| Auslastung $U_i$ von Knoten i 		| $U_i=X * bar D_i=lambda_i/mu_i * X=e_i * bar S_i * X$ | $U_i=(X * bar D_i)/k=lambda_i / (k * mu)i$ | $U_i=1 - exp(-X * bar D_i)$ |
| Akkumulierte Verzeilzeiten in i 		| $bar V_i * e_i=bar D_i/(1-U_i)=bar D_i/(1-X * bar D_i)$ | $bar V_i * e_i=bar D_i/(1 - U_i^k)=1/mu_i * e_i/(1-rho^k)=bar D_i/(1-rho^k)$ näherungsweise| $bar V_i * e_i=bar D_i$ |
| Mittlere Anzahl Aufträge in Knoten i 	| $bar N_i=(X * bar D_i)/(1 - X * bar D_i)$ | $bar N_i=(k * U)/(1-U)i^k=(k * rho_i)/(1-rho_i^k)$ näherungsweise | $bar N_i=X * bar D_i$ |

 - Tuning an der am höchsten ausgelasteten Komponente (größtes U) am effektivsten (solange diese das größte U hat) 

### Wartenetze geschlossen

|                                         |                                  |
| --------------------------------------- |----------------------------------|
|Denkzeit|$Z$|
|mittlere Verweilzeit/Antwortszeit/Reparaturzeit| $R=bar V = N/X - Z$ |
|Durchsatz| $X=N/(bar V+ bar Z)$ |
|mittlere Zahl aktive Aufträge| $N_a / N = bar V/(bar V+Z) => N_a=X * bar V$ |
|mittlere Zahl inaktive Aufträge| $N_ia =X * bar Z$ |
|relative Besuchshäufigkeit| $r_k$ |
|Durchsatz am Knoten N| $X(N)=N/(sum_(k=1)^K bar V_k(N) * r_k$ |


 - Berechnung der Ankunftsrate wie in offenen Systemen funktioniert hier nicht

#### Mittelwertanalyse

