/**
 * Je beschikt over een startgetal en een eindgetal
 * Je verhoogt het startgetal telkens met zichzelf
 * Dit gebeurt zeker 1 keer.
 * Als het resultaat groter wordt dan het eindgetal stop deze loop.
 * Indien het startgetal groter is dan het eindgetal moet hij het slechts 1 keer doorlopen.
 *
 * vb:
 * startgetal = 4
 * eindgetal = 15
 *
 * in de console krijg ik
 * 4 + 4 = 8
 * 8 + 8 = 16
 *
 * vb2:
 * startgetal = 4
 * eindgetal = 3
 *
 * in de console krijg ik
 * 4 + 4 = 8
 */
let startgetal = 4;
let eindgetal = 3;
let startgetal2 = startgetal;

do {
  startgetal += startgetal;
  console.log(startgetal2 + " + " + startgetal2 + " = " + startgetal);
  startgetal2 += 4;
} while (startgetal < eindgetal);
