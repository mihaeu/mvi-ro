# Prüfung SS 16

> Angaben teils unvollständig und fehlerhaft.

## 1.

Gegeben ist ein $M//M//2//1//oo//FCFS$ System. Ankunftsrate sei $lambda$ und Bedienrate $mu$.

### a)

Zeichnen Sie ein geeignetes Übergangsdiagramm. Was bedeuten die Zustände?

![](pruefung-ss-16-1.png)

0: 0 im System

1: 1 Auftrag im System (1 aktiv, 0 warten)

2: 2 Aufträge im System (2 aktiv, 0 warten)

3: 3 Aufträge im System (2 aktiv, 1 warten)

### b)

Wie lauten die Übergangswahrscheinlichkeiten. Verwenden Sie hierfür $a = lambda/mu$.

$(G)$

$pi_0 * lambda = pi_1 * mu => pi_1 = pi_0 * lambda/mu=pi_0 * a$

$pi_1 * lambda = pi_2 * 2mu => pi_2 = pi_1 * a/2=pi_0 * a * a/2$

$pi_2 * lambda = pi_3 * 2mu => pi_3 = pi_2 * a/2=pi_0 * a * (a/2)^2$

$(N)$

$pi_0 + pi_1 + pi_2 + pi_3 = 1$


$pi_0 + pi_0 * a + pi_0 * a * a/2 + pi_0 * a * (a/2)^2 = 1$

$pi_0 + pi_0 * a (1 + a/2 + (a/2)^2)=1$, geometrische Reihe konvergiert falls $a/2 < 1$

$pi_0 + (pi_0 * a)/(1-a/2)=1$

$pi_0(1-a/2) + pi_0 * a = 1-a/2$

$pi_0((1-a/2)+a)=1-a/2$

$pi_o=(1-a/2)/(1+a/2)=(2-a)/(2+a)$

???

### c)

Ab jetzt sei $lambda = mu = 1/s$. Wie hoch ist die Verlustwahrscheinlichkeit? Zwischenergebnis: $1/11$

### d)

Wie hoch ist die Wahrscheinlichkeit, dass ein ankommender Auftrag warten muss? Zwischenergebnis: $10/11$

#### e)

Wie lange befindet sich ein Auftrag im Mittel insgesamt im System?

### f)

Wie viele Aufträge warten im Schnitt?

## 2.

In einer Arztpraxis kommen Kunden mit der Rate $lambda$ an. Wenn mehr als 2 Patienten im Wartezimmer sind, geht die Hälfte der Patienten sofort wieder. Die Zeit die der eine Arzt pro Patient benötigt ist $bar S$. Wenn der Arzt ins Wartezimmer sieht und dort mehr als 2 Patienten sind, kürzt der Arzt seine Bearbeitungszeit auf $bar S/2$.

### a)

Zeichnen Sie den Übergangsgraphen.

![](pruefung-ss-16-2.png)

Zustand i: i Patienten in der Praxis (Wartezimmer und Behandlungszimmer)

### b)

Unter welcher Bedingung (in Abhängigkeit von $bar S$) gibt es eine Gleichgewichtslösung? Keine Berechnung notwendig.

## 3.

Gegeben sei folgendes HMKD:

![](pruefung-ss-16-3.png)

### a) 

Geben Sie die Übergangsmatrix an.

$P=[[0,0.5,0.333,0,0,0.167],[1,0,0,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[1,0,0,0,0,0],[0,0,0,0,1,0]]$

### b)

Wie lauten die Übergangswahrscheinlichkeiten?

$pi_0=0.3529412$

$pi_1=0.1764706$

$pi_2=0.1176471$

$pi_3=0.1176471$

$pi_4=0.0588235$

$pi_5=0.1764706$

### c) 

Wie lange dauert es bis Zustand 3 wieder erreicht wird?

$R_3=1/pi_3 approx 8.5$

### d) 

Wie lange hält man sich in der Zustandsmenge $M={2, 3, 4, 5}$ auf, wenn man in Zustand zwei startet?

## 4.

Gegeben ist eine Anwendungsarchitektur als Wartenetz. Ein Netzserver (N) nimmt von außen Aufträgt von Clients an und leitet diese an ein SAP System weiter. Das SAP System erstellt pro Benutzerauftrag zwei Anfragen an einen DB Server (DB). Das SAP System kommuniziert dabei über den Netzserver mit dem DB Server. Der SAP Knoten stellt im Mittel zwei Anfragen pro Auftrag an den DB Knoten. Der DB Server kommuniziert ebenfalls über den Netzserver mit dem SAP System. Das SAP System gibt über den Netzknoten die Angabe nach außen.

### a) 

Zeichnen Sie ein geeignetes Wartenetz ohne Übergangsraten.

![](pruefung-ss-16-4.png)

### b) 

Wie viele Besuche gibt es im Mittel am lokalen Netzwerk und am SAP System?

SAP: $"DB" + 1 = 3$

N: $1 + "SAP" + "DB" = 6$

## 5. 

Erzeuger Verbraucher mit Puffergröße N=4. Der Erzeuger legt beim Erzeugen 2 Elemente ab. Wenn nur noch Platz für ein Element existiert, legt er nur eines ab. Ist kein Platz, legt er nichts ab. Erzeugt wird mit Wahrscheinlichkeit $p=1/2$. Der Verbraucher verbraucht ein Element. Die Wahrscheinlichkeit des Verbrauchers ist $q = 1 - p$.

### a)

Zeichnen Sie einen geeignetes Übergangsdiagramm. Was bedeuten die Zustände.

![](pruefung-ss-16-5.png)

Zustand i: i Elemente im Puffer

### b)

Geben Sie die Übergangsmatrix an.

$P=[[0.5,0,0.5,0,0],[0.5,0,0,0.5,0],[0,0.5,0,0,0.5],[0,0,0.5,0,0.5],[0,0,0,0.5,0.5]]$

### c)

Es befinden sich 2 Elemente im Puffer. Wie lange dauert es bis der Puffer entweder leer oder voll ist? Passen Sie hierfür den Übergangsgraph entsprechend an.

![](pruefung-ss-16-5_2.png)

P(0,0) und P(4,4) werden zu absorbierenden Zuständen geändert. $vec A_2$ z.B. über visit counts berechnen.

$P'=[[1,0,0,0,0],[0.5,0,0,0.5,0],[0,0.5,0,0,0.5],[0,0,0.5,0,0.5],[0,0,0,0,1]]$

$V=[[1.1428571,0.2857143,0.5714286],[0.5714286,1.1428571,0.2857143],[0.2857143,0.5714286,1.1428571]]$

$vec A_2 = v_"2,1" + v_"2,2" + v_"2,3" = 2$

### d)

Wie hoch ist die Wahrscheinlichkeit, dass der Puffer zuerst leer wird?

Gesucht ist $a_"2,0"$.

$P_a = [[0.5,0],[0,0.5],[0,0.5]]$

$vec a_i = vec v_i * P_a$

$a_"2,0"=1/7=0.1428571$

$a_"2,4"=6/7=0.8571429$