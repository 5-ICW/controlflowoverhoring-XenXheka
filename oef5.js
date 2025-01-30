/**
 * Je bouwt verder op de opgave 4.
 *
 *  * commande     -   console output
 * - open deur  =>  deur gaat open
 * - muziek     =>  muziek start met spelen
 * - stilte     =>  Muziek gaat uit
 * - licht aan  =>  Licht gaat aan
 * - licht uit  =>  licht gaat uit
 *
 * stilte geeft echter enkel een output als de radio aan staat
 * licht uit geeft enkel otuput als het licht al aan was
 */
let commandos = "stilte";
let radio = true;
let lichtaan = true;
switch (commandos) {
  case "open deur":
    console.log("deur gaat open");
    break;
  case "muziek":
    console.log("muziek start met spelen");
    break;
  case "stilte":
    if (radio == true) {
      console.log("Muziek gaat uit");
      break;
    } else {
      break;
    }
  case "licht aan":
    console.log("Licht gaat aan");
    break;
  case "licht uit":
    if (lichtaan == true) {
      console.log("licht gaat uit");
      break;
    } else {
      break;
    }

  default:
    console.log("Geen commando gegeven");

    break;
}
