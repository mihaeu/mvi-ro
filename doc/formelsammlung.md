# Formelsammlung

| Allgemein          |                                 |
| ------------------ | --------------------------------|
| geometrische Reihe für Teilsummen | $s_n = sum_(k=0)^n q^k = (1-q^(n+1)) / (1-q)$, falls $q ne 1$ <br>Bsp.: $1+U+U^2+U^3+U^4 = (1-U^5)/(1 - U)$|
| geometrische Reihe für Grenzwert | $sum_(k=0)^oo q^k = 1/(1-q)$, konvergiert falls $ \|q\|<1 $, sonst divergiert sie <br>Bsp.: $pi_i=pi_0 * (1+(lambda/mu)+(lambda/mu)^2+(lambda/mu)^3+...)=pi_0 * 1/(1-lambda/mu)$|
|Summenformel|$sum_(i=0)^k i=N*(N+1)/2$|
| Wahrscheinlichkeit für eine Zustandsfolge | $vec p_n=(P(X_n=0), P(X_n=1), P(X_n=2), ...)=vec p_n=vec p_(n-1) * P=vec p_0*P^n$|
||$P(A,B)=P(B,A)=P(A \| B)=(P(A uu B))/(P(B))$|
||$P(A nn B)=P(B nn A) * P(B)$|
||$P(x_2 = ? \| x_1=?, x_0=?)=P(x_2=?\|x_1=?)$|
||$P(x_2=?,x_1=?\|x_0=?)= $P(x_2 = ? \| x_1=?, x_0=?) * $P(x_1=?, x_0=?)$|

## Kapitel 1 - Markovketten mit diskreter Zeit

|                   |                                 |Quelle|
|------------------ | --------------------------------|------|
|Gleichgewicht|$pi_j=sum_(i=0)^oo pi_i * p_(ij)$<br>$vec pi=vec pi * P$<br>$vec p_n=vec p_0 * P^n$|1.2.7|
|Irreduzibilität|Eine HMK heißt irreduzibel, wenn jeder Zustand von jedem anderen aus mit positiver Wahrscheinlichkeit in endlich vielen Schritten erreicht werden kann, andernfalls heißt sie reduzibel.|1.2.2|
|Aperiodizität|Gibt es $d ge 2$ disjunkte, nicht leere Teilmengen der Zustandsmenge Z, die immer in derselben Reihenfolge in d Schritten durchlaufen werden, dann heißt die HMK periodisch mit Periode d. Gibt es keine solchen Teilmengen, dann heißt die HMK aperiodisch. Ein Zustand einer HMK heißt absorbierend, wenn er nicht mehr (mit positiver Wahrscheinlichkeit) verlassen werden kann.|1.2.4|
| Rekurrenzzeit,<br>Zeitschritte bis ich wieder in i bin    | $R_i=1/pi_i$ |1.6.3|
| Verweilzeit, <br>mittlere Aufenthaltsdauer im Zustand i | $ T_i=1/(1-p_(ii))=1/(sum_(i ne j) p_(ij))=sum_(n=1)^oo n*(1-p_(ii))*p_(ii)^(n-1)=1/(1-p_(ii)) $|1.4.1|
|Mittlere Aufenthalsdauer in der Menge M|$T_(M,i)=1 + sum_(k in M) p_(ik) * T_(M,k)$, für $i in M$ <br> $(E-P_(M)) * vec T_M=((1),(vdots),(1))$|1.4.3|
|Mittlere Absorptionszeit|$(E-P_(na)) * vec A=((1),(vdots),(1))$|1.4.3|
|Mittlere Absorptionszeit bei Start in i|$A_i=sum_(k=1)^m v_(i,k)$|1.5.3|
|Besuchshäufigkeiten, Visit Counts<br>mittlere Anzahl Besuche bei Start in j und Absorption in i|$vec v_i * (E-P')=vec e_i$<br>$V*(E-P')=E => V=(E-P_(na))^(-1)$|1.5.4|
|Wahrscheinlichkeit, dass bei Start in i, Absorption in j stattfindet|$vec a_i=vec v_i * P_(na)$|1.5.6|
|Rekurrenzzeiten<br>Dauer zwischen aufeinanderfolgenden Besuchen|$R_i=1/pi_i=1+sum_(k ne i) p_(ik) * T_(M,k)$<br>$R_i = 1+ p_(ij) * T_(M,j)$, falls $j in Z; j ne i; p_(ii)+p_(ij)=1$ |1.6.3|
|Distanz|$D_(i,N)=A_i$|1.5.10|

<br>

| Bestellpolitik |                         |
| -------------- | ----------------------- |
|h|Lagerkosten pro Menge und Zeit|
|Q|Bestellmenge|
|K|fixe Bestellkosten|
|c|mengenprop. Bestellkosten|
|b|Anzahl bestellter Einheiten|
|S|Lagerkapazität|
|s|Bestellpunkt|
|$v_i$|Wahrscheinlichkeit, dass i verbraucht wird|
|r|$"Bestellrate"="Einheit"/"Zeit"="Verbrauch"$|
|Fall i) Zustandsraum bei Vormerkung |${..., -2, -1,0,1,2,...,S}$|
|Fall ii) Zustandsraum ohne Vormerkung|${0,1,2,...,S}$|
| Mittlerer Lagerbestand         | $Q/2$  |
|aktueller Lagerbestand| $L(t) = Q-r * t$ <br> $L(t_0)=0$ <br> $t_0=Q/r$|
|Durchschnittskosten pro Zeit|$D(Q)=Q/2 * h + Kr/Q$|
|Lagergrößenformel für min. Kosten| $Q_(opt)=root ()((2 * r * K) / h)$ |
| Mittlerer Lagerbestand         | $bar L = sum_(i=0)^S pi_i * i$  |
|zu bestellende Einheiten|$b_n=0$, für $X_n ge s$<br>$b_n=S-X_n$, für $X_n < s$|
|Mittlere Kosten pro Periode|$G=sum_(k=0)^c pi_k * R(k)$|
|Kosten für eine Bestellung der Höhe b|$B(b)=0$, für $b=0$<br>$B(b)=K+c * b$, für $b > 0$|
|Lager-/Fehlmengenkosten|$K(x)=h * x$, für $x ge 0$ "Lagerkosten"<br>$K(x)=-f * x$, für $x < 0$ "Fehlmengenkosten"<br>$(h, f ge 0)$|
|Gesamtkosten einer Periode<br>(i = Endbestand)|$R_i=sum_(K=0)^i h * (i - k) * v_k + sum_(k ge i +1) f * (k-i) * v_k$, für $i ge s$<br>$R_i=K+c * (S - i) + sum_(k=0)^S h* (S-k) * v_k + sum_(k ge S+1) f * (k-S) * v_k$, für $i < s$|
|Zeit bis Lager leer ist|$=>$Zustand Lagerbestand 0 modifizieren, so dass er absorbierend ist, dann Absorptionszeit berechnen|

<br>

| Prozessoren und Speicher       | | Quelle |
| --------------------- |---------|--|
| Verfügbarkeit bei Prozessoren/Speichern | $V=pi_"keiner ausgefallen"=pi_0$                         |-|
| Stretching Faktor                       | $S_A=T_A^(real)/T_A=n/m=n/(n-n(pi_("Warte-Zustand 1")+pi_("Warte-Zustand 2")+...))$|1.3.1|
| Leistung Bi vs. Mono                    | $T_(Mono)= 2 * T_A=(2*T_A) / T_A^(real)=2/S_A$|1.3.1|
| Bandbreite                              | $E(V_p)=m(1-(1-1/m)^p)$ wobei $m="Speichermodule"$ und $p="Prozessoren"$|
||$T_(Bi)/T_(Mono)=T^**/(2T)=S/2$|1.3.2|

<br>

|Google Ranking| | Quelle|
|--------------|-|-------|
|1. Google Matrix|$H=[[0, 0, 0, 0],[1/2, 0, 0, 1/2],[1/3, 1/3, 1/3, 0],[1/4, 1/4,1/4,1/4]]; p_(ij)= 1/"no of links from i"$|1.3.3|
|2. random surfer|$S=H+1/n * vec e^T * vec a^T; vec a=((1),(vdots),(1)); vec e=(0, ...,0,1,0,...,0)$|1.3.3|
|3. falls nicht aperiodisch oder irreduzibel|$G=alpha * S + (1-alpha) * 1/n * [[1,...,1],[vdots,ddots,vdots],[1,...,1]]$|1.3.3|

<br>

|Erzeuger/Verbraucher| | Quelle|
|--------------------|-|-------|
|Wahrscheinlichkeit Zustand i|$pi_i=((p/q)^i * (1 - p/q))/(1-(p/q)^(N+1))$, falls $p ne q$|1.3.5|
|Overflow/Überlauf|$p("overflow")=pi_0*q=(q-p)/(1-(p/q)^(N+1))$|1.3.5|
|Underflow/Unterlauf|$p("underflow")=pi_N * p$|1.3.5|
|mittlere Füllung|$f=sum_(1=0)^N i * pi_i$<br>oder<br>$f=(p/q(1-(p/q)^N * (N * (1-p/q)+1)))/((q-(p/q)^(N+1)) * (1-p/q))$|1.3.5|
|Mittlere Aufenthaltszeit|$w=(f+1)/q$|1.3.5|
|Wahrscheinlichkeit Zustand i<br>(unendlicher Puffer)|$pi_i=(p/q)^i * (1-p/q)$|1.3.5|
|Underflow/Unterlauf<br>(unendlicher Puffer)|$p("underflow")=pi_0 * q=q-p$|1.3.5|
|Mittlere Füllung<br>(unendlicher Puffer)|$f_oo=p/(q-p)$|1.3.5|
|Mittlere Aufenthaltszeit<br>(unendlicher Puffer)|$w=(f+1)/q=1/(q-p)$|1.3.5|
|Wahrscheinlichkeit Erzeuger wartet|$pi_(EW)=pi_0 * q$|1.3.5|
|Wahrscheinlichkeit Verbraucher wartet|$pi_(VW)=pi_N * p$|1.3.5|

## Kapitel 2 - Markovketten mit stetiger Zeit

|   |   |Quelle|
|---|---|--|
|  Gleichgewicht (falls irreduzibel,<br>Periodizität egal, da $Delta t$ beliebig klein werden darf) | $vec pi * Lambda = 0$ (P)<br>$sum vec pi_i=1$ (N)  |2.2.1|
|Konvergenzsatz $n -> oo$ <br>|$lim_(n->oo) p_i(t)=pi_i$, falls irreduzibel|2.2.1|
|Lokales Gleichgewicht|$sum_(i in K)sum_(i in K) pi_i * lambda_(ij) = sum_(i in K)sum_(i in K) pi_j * lambda_(ji)$|2.2.1|
|Lokales Gleichg. bei Geburts-Sterbeprozess|$pi_i * lambda_(i,i+1)=pi_(i+1)*lambda_(i+1,i)$|?|
|Mittl. Aufenthaltsdauer/Verweilzeit $T_i$ in i|$T_i=-1/lambda_(ii)=1/sum_(i ne j) lambda_(ij)$|
|Mittl. Aufenthaltsdauer/Verweilzeit $T_M$ in M|$-sum_(k in M) lambda_(ik)*T_(M,k)=1; M=Lambda_M$ <br> $-Lambda_M * vec T_M=((1),(vdots),(1))$<br>$T_M=sum_(k ne i)q_(i,k)*T_(M,k)$|2.4.2|
|Absorptionszeit|$-Lambda_(na) * vec A  =  ((1),(vdots),(1))$<br>$A_i=sum_(k=0)^m v_(i,k)$|2.5.3|
|Besuchshäufigkeiten, Visit Counts in i<br>bzw. Besuchszeiten bei HMKS|$-vec v_i * Lambda_(na)=vec e_i$<br>$-V * Lambda_(na) = E => V=Lambda_(na) ^(-1)$|2.5.4|
|Absorptionswahrscheinlichkeiten|$vec a_i = vec v_i * Lambda_a$|2.5.4|
|Rekurrenzzeiten|$R_i=-1/(lambda_(ii)*pi_i)$<br>$R_i=T_i+sum_(k ne i) q_(ik) * T_(M,k)$<br>$q_(ik)=lambda_ik/(sum_(j ne i) lambda_(ij))$<br>$R_i=T_i + T_M,j$, falls $j in Z;j ne i;lambda_(ii)=-lambda_(ij)$|2.6.2|
|Distanz (Dauer von Betreten in i bis Betreten in j|$D_(ij)=A_i$|?|

<br>

|Lebensdauer / Verfügbarkeit||Quelle|
|-|-|-|
|MTTF(ailure)|$1/lambda$|-|
|MTTR(epair)|$1/mu$|-|
|Verfügbarkeit|$V=sum_(i,j>0) * pi_(i,j)$|-|
|Lebensdauer, <br>MTTDL RAID-1<br> (Mean Time to Data Loss)|$ M\T\TDL_(RAID-1)=(M\T\TF_("Platte")^2)/(2 * "MTTR"_("Platte"))$|2.5.6|
|MTTDL RAID-3/4/5|$ M\T\TDL_(RAID-3//4//5)=(M\T\TF_("Platte")^2)/(n * (n-1) * "MTTR"_("Platte"))$|2.5.6|
|MTTDL RAID-5|$ M\T\TDL_(RAID-1)=(M\T\TF_("Platte")^3)/(n * (n-1) * (n-2) * "MTTR"_("Platte")^2)$|2.5.6|


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

| M/M/1                   |                            |Quelle |
| ----------------------- | -------------------------- | ----- |
| Verweilzeit                   | $V=W+S$                                  |3.1.1|
|Satz von Little|$bar N = bar V * lambda$<br>$bar N_W=bar W * lambda$|3.1.3|
| Ankunftsrate                  | $lambda=1/"Zwischenankunftsrate"=U * q$ |3.1.1|
| Bedienrate                    | $mu=1/bar S$                  |3.1.1|
| mittlere Bedienzeit           | $bar S = 1/mu$              |3.1.1|
| zeitl. Auslastung/Durchsatz,<br>Wahrscheinlichkeit, dass Auftrag warten muss   | $U=rho=lambda/mu=lambda * bar S=P("muss-warten")$<br>$U=X$, falls $U < 1$ |3.1.2|
| mittlere Verweilzeit          | $bar V=1/mu-lambda=bar S * 1/(1-U)$ |3.1.6|
| mittlere Verweilzeit im Cache | $bar V_"Cache"="Anzahl Blöcke"/(lambda *(1-"Trefferwahrscheinlichkeit"))$ |3.1.5|
| mittlere Wartezeit            | $bar W=lambda/mu *1/(mu-lambda)=bar S  *U/(1-U)$ |3.1.6|
| mittlere Anzahl im System     | $bar N=U/(1-U)=lambda/(mu-lambda)=lambda * bar V$ |3.1.6|
| mittlere Anzahl Wartender     | $\bar{N}_W=U^2\cdot\frac{1}{1-U}=\lambda\cdot \bar{W}$ |3.1.6|
| Verteilung Verweilzeit        | $F_V(x)=P(V\le x)=1-e^{-\frac{x}{\bar{V}}}$ für $x\ge 0​$ |3.1.6|
| p-Quantil                     | $x_p=-\bar{V}\cdot ln(1-p)$ für $0\ge p>1$ |3.1.6|

<br>

| M/M/2 (Bedienrate $mu$)   |                                  |Quelle|
| ------------------------- | ---------------------------------|------|
| mittlere Verweilzeit      | $bar V=1/mu * a^2/(4-a^2)$ |Übung 3.1.10|
| zeitl. Auslastung,<br>Wahrscheinlichkeit Auftrag muss warten         | $rho=lambda/(2mu)=a/2$ |Übung 3.1.10|
| mittlere Wartezeit        | $bar V=1/mu * a^2/(a^2-a^2)$ |Übung 3.1.10|
|||

<br>

| M/M/s                      |                                 |Quelle|
| ------------------------- | ---------------------------------|------|
| mittlere Verweilzeit      | $\bar{V}=\frac{1}{\mu}\cdot\frac{1}{1-\rho^k}$ |3.1.8|
| zeitl. Auslastung         | $\rho=\frac{\lambda}{\mu\cdot k}$ |3.1.8|
| mittlere Anzahl im System | $bar N = (k*rho)/(1-rho^k)$   |3.1.8|
| mittlere Anzahl Wartender | $\bar{N}_W=\frac{k\cdot\rho^{k+1}}{1-\rho^k}$ |3.1.8|
| mittlere Wartezeit        | $bar W = bar V - 1/mu = 1/mu * 1/(1-rho^k) - 1/mu = 1/mu * rho^k/(1-rho^k)$ |3.1.8|

<br>

| M/M/s/0                   |                             |Quelle|
| ------------------------- | --------------------------- |------|
| Angebot                   | $a=lambda/mu$                  |3.1.10|
| Verlustwahrscheinlichkeit,<br>"Erlang-B Formel" | $pi_s=B(s,a)=(a^n/(n!))/( sum_(i=0)^n a^i/(i!))$<br>$B(s,a)=(a * B(s-1,a))/(s+a * B(s-1,a))$<br>$B(1,a)=a/(1+a)$<br>$bar B_(s,a)=a(1-B(s,a))$ |3.1.11|

<br>
 
| M/G/1                     |                              |Quelle|
| ------------------------- | -------------------------------- |-|
|Variationskoeffizient      | $c^2=(Var(S))/(bar S^2)$ |3.1.9|
|mittlere Bedienzeit        | $bar S = 1/mu$|-|
|mittlere Wartezeit         | $bar W_G=(lambda * (1+c^2))/(2 * mu * (mu - lambda))=bar S * (U * (1+c^2))/(2 * (1-U))$ |3.1.9|
|$bar(S^2)$                 | $bar(S^2) = Var(S) + bar S^2 = (1 + c^2) * bar S^2$ | -|
|mittlere Verweilzeit       | $bar V = bar S + bar W = bar S + (lambda * bar S^2 * (1+c^2))/(2 * (1 - rho))=bar S * (1 + (1+c^2)/(2) * (rho)/(1-rho))$ |-|
|mittlere Anzahl Wartender  | $bar N_W=lambda * bar W = = (lambda^2 * bar S^2)/(2(1-rho))=(1+c^2)/2 * rho^2/(1-rho)$ |-|
|mittlere Anzahl im System  | $bar N = lambda * bar V = lambda * bar S + (lambda^2 * bar S^2)/(2(1-rho))=rho + (1+c^2)/2 * rho^2/(1-rho)$ |-|
|Varianz|$Var(S)=sum_(i=0)^"Anzahl Systeme" "Anteil" * (S_1 - bar S)^2$|

 - Mittelwerte nehmen linear mit der Varianz zu
 - die Formeln sind ähnlich zu M/M/1, der einzige Unterschied ist der Extra-Faktor $(1+c^2)/2$


| M/D/1 |   Spezialfall von M/G/1 (c=0)            | Quelle|
| ------------------------- | ------------------- |-|
|mittlere Wartezeit         | $bar W_D=lambda/(2 * mu * (mu-lambda))=(bar S * U)/(2 * (1 - U))$ |3.1.9|

<br>

|   Wartenetze offen             |                                 | Quelle|
| ------------------------------ |---------------------------------|-|
| Typ 1 für Platten, RAID; allg. E-A Geräte | $M//M//m//oo//oo//"FCFS"$ |3.2.2|
| Typ 2 für CPUs mit Prozessor Sharing | $M//G//1//oo//oo//"PS"$ |3.2.2|
| Typ 3 für infinite Server "IS", Terminals, allg. Wartezustände,  Prozesssynchronisation |$M//G//oo$|3.2.2|
| Ankunftsrate Knoten i                                        | $lambda_i = lambda_(0,1) + sum_(j=1)^k p_(j,i) * lambda_j$, für $i=1, ..., k$ <br> $lambda_i=e_i * X$|3.2.3|
| Durchsatz des Gesamtnetzes                           | $X=("Anzahl bearbeiteter Aufträge")/(Zeit)=sum_(i=1)^K lambda_(0,1)$, falls $U_i < 1$<br>Summe aller von außen ("0") kommenden Ankunftsraten |3.2.3|
|Besuchshäufigkeit, mittl. Anzahl Besuche | $e_i=lambda_i/X$ |3.2.3|
|mittlere Verweilzeit | $bar V = e_i * V_i + e_(i+1) * V_(i+1) + ... = sum_(i=1)^K bar V_i * e_i$ |3.2.3|
|Auslastung Knoten i| $U_i = lambda_i/mu_i$, bei Typ 1 und 3 <br>$U_i = lambda_i/(m_i * mu_i)$ bei Typ 2 |3.2.3|
|mittlere Verweilzeit am Knoten i|$bar V_i=1/mu_i * 1/(1-U_i^m)$ für Typ 1 und 2 <br>$bar V_i=1/mu_i$ für Typ 3|
|mittlere Anzahl Knoten im Netz|$bar N=X * bar V$|3.2.3|
|reine Bedienzeit ohne Wartezeit im Netz|$bar S = e_i * bar S_1 + e_2 * bar S_2 + ...$|3.2.4|
|Gesamtanforderung, "demand"	| $bar D_i = e_i * bar S_i$ |3.2.5|

falls nur D und X bekannt (Quelle: 3.2.5)

| | M/M/1 | M/M/k | Typ3, "IS" |
|---------------------------------------|-------|-------|-------|
| Auslastung $U_i$ von Knoten i 		| $U_i=X * bar D_i=lambda_i/mu_i * X=e_i * bar S_i * X$ | $U_i=(X * bar D_i)/k=lambda_i / (k * mu_i)$ | $U_i=1 - exp(-X * bar D_i)$ |
| Akkumulierte Verzeilzeiten in i 		| $bar V_i * e_i=bar D_i/(1-U_i)=bar D_i/(1-X * bar D_i)$ | $bar V_i * e_i=bar D_i/(1 - U_i^k)=1/mu_i * e_i/(1-rho^k)=bar D_i/(1-rho^k)$ näherungsweise| $bar V_i * e_i=bar D_i$ |
| Mittlere Anzahl Aufträge in Knoten i 	| $bar N_i=(X * bar D_i)/(1 - X * bar D_i)$ | $bar N_i=(k * U_i)/(1-U_i^k)=(k * rho_i)/(1-rho_i^k)$ näherungsweise | $bar N_i=X * bar D_i$ |

 - Tuning an der am höchsten ausgelasteten Komponente (größtes U) am effektivsten (solange diese das größte U hat) 

|   Wartenetze geschlossen      |                                  |Quelle|
| ----------------------------- |----------------------------|--|
|Denkzeit|$Z$|3.2.7|
|Aufträge|$N*(bar V + bar Z)$|3.2.7|
|mittlere Verweilzeit/Antwortszeit/Reparaturzeit| $R=bar V = N/X - bar Z$ |3.2.7|
|Durchsatz| $X=N/(bar V+ bar Z)$ |3.2.7|
|mittlere Zahl aktive Aufträge| $N_a=X * bar V$ wegen $N_a / N = bar V/(bar V+Z)$ |3.2.7|
|mittlere Zahl inaktive Aufträge| $N_(ia) =X * bar Z$ |3.2.7|

 - Berechnung der Ankunftsrate wie in offenen Systemen funktioniert hier nicht

| Mittelwertanalyse |  | Quelle|
|-------------------|--|--|
|relative Besuchshäufigkeit| $r_k=sum_(j=1)^K p_(jk) * v_j$<br>$r_(k0)=1$ |3.2.9|
|Durchsatz am Knoten N| $X(N)=N/(sum_(k=1)^K bar V_k(N) * r_k$ |3.2.9|
|Verweilzeit bei N Aufträgen im Knoten K|$V_k(N)=S_k$, bei Verzögerungsknoten<br>$V_k(N)=bar S_k + bar S_k * bar N_k(N-1)$, bei Warteknoten<br>$barN_k=0$|3.2.9|
|mittlere Anzahl Aufträge in k bei N Aufträgen|$bar N_k(N)=X(N) * r_k * bar V_k(N)$|3.2.9|
