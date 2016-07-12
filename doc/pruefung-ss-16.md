# Prüfung SS 16

> Angaben teils unvollständig und fehlerhaft.

## 1.

Gegeben ist ein $M//M//2//1//oo//FCFS$ System. Ankunftsrate sei $lambda$ und Bedienrate $mu$.

### a)

Zeichnen Sie ein geeignetes Übergangsdiagramm. Was bedeuten die Zustände?

![](pruefung-ss-16-1.png)

0: 0 im System

1: 1 Auftrag im System (1 aktiv, 0 warten)

2: 2 Auftrag im System (2 aktiv, 0 warten)

3: 3 Auftrag im System (2 aktiv, 1 warten)

### b)

Wie lauten die Übergangswahrscheinlichkeiten. Verwenden Sie hierfür $a = lambda/mu$.

### c)

Ab jetzt sei $lambda = mu = 1/s$. ...

### d)

...

#### e)

...

## 2. Arztpraxis

In einer Arztpraxis kommen Kunden mit der Rate $lambda$ an. Wenn mehr als 2 Patienten im Wartezimmer sind, geht die Hälfte der Patienten sofort wieder. Die Zeit die der eine Arzt pro Patient benötigt ist $bar S$. Wenn der Arzt ins Wartezimmer sieht und dort mehr als 2 Patienten sind, halbiert der Arzt seine Bearbeitungszeit.

### a)

Zeichnen Sie den Übergangsgraphen.

![](pruefung-ss-16-2.png)

### b)

Unter welcher Bedingung (in Abhängigkeit von $bar S$) gibt es eine Gleichgewichtslösung? Keine Berechnung notwendig.

## 3. Gegeben sei folgendes HMKD:

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

### c) Wie lange dauert es bis Zustand 3 wieder erreicht wird?

$R_3=1/pi_3=...$

### d) Wie lange hält man sich in der Zustandsmenge $M={2, 3, 4, 5}$ auf, wenn man in Zustand zwei startet?

## 4. Wartungsnetz

Gegeben ist eine Anwendungsarchitektur als Wartenetz. Ein Netzserver (N) nimmt von außen Aufträgt von Clients an und leitet diese an ein SAP System weiter. Das SAP System erstellt pro Benutzerauftrag zwei Anfragen an einen DB Server (DB). Das SAP System kommuniziert dabei über den Netzserver mit dem DB Server. Der DB Server kommuniziert ebenfalls über den Netzserver mit dem SAP System. Anschließend sendet das SAP System die Anfrage über das lokale Netzwerk nach außen.

### a) Zeichnen Sie ein geeignetes Wartenetz.

![](pruefung-ss-16-4.png)

### b) Wie viele Besuche gibt es im Mittel am lokalen Netzwerk und am SAP System?

SAP: $"DB" + 1 = 3$

N: $1 + "SAP" + "DB" = 6$

## 5. 

Erzeuger Verbraucher mit Puffergröße N=4. Der Erzeuger legt beim Erzeugen 2 Elemente ab. Wenn nurnoch Platz für ein Element existiert, legt er nur eines ab. Ist kein Platz, legt er nichts ab. Erzeugt wird mit Wahrscheinlichkeit $p=1/2$. Der Verbraucher verbraucht mit Wahrscheinlichkeit 1 - p ein Element.

### a)

Zeichnen Sie einen geeignetes Übergangsdiagramm. Was bedeuten die Zustände.

![](pruefung-ss-16-5.png)

### b)

Geben Sie die Übergangsmatrix an.

### c)

Es befinden sich 2 Elemente im Puffer. Wie lange dauert es bis der Puffer entweder leer oder voll ist? Passen Sie hierfür den Übergangsgraph entsprechend an.

![](pruefung-ss-16-5_2.png)

P(0,0) und P(4,4) werden zu absorbierenden Zuständen geändert. $vec A_2$ z.B. über visit counts berechnen.

### d)

Wie hoch ist die Wahrscheinlichkeit, dass der Puffer zuerst leer wird?

Gesucht ist $a_"2,0"$.