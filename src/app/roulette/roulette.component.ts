import { Component } from '@angular/core';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent {
  public min:any;
  public max:any;
  public randomNum: any;
  public percent: number = 1; 

  public demons = [
    "#1. Celestial Force by MindCap & more",
    "#2. Freedom08 by Pennutoh & more",
    "#3. Killbot by BoldStep & Lithifusion",
    "#4. Belloq by Sminx & more",
    "#5. distraught by Alkali & more",
    "#6. EXPLICIT by waturn & Renn241",
    "#7. Black Blizzard by KrmaL",
    "#8. Hatred by AZuLeR4 & SrGuillester",
    "#9. SPEEDRUN by Kaito",
    "#10. Epsilon by TeamProxima",
    "#11. Carcano by Asuith & TomsoN",
    "#12. Artificial Ideology by TeamN2",
    "#13. Prismatic Haze by Cirtrax & Gizbro",
    "#14. Cadrega Mode by TCTeam",
    "#15. Artifice by f3lixsram & more",
    "#16. ATMarbl by Pennutoh & more",
    "#17. Kinetic Bypass by Sminx",
    "#18. Cataclysm by Ggb0y",
    "#19. Audio Extraction by GoodSmile & more",
    "#20. The Flawless by lllRyanlll & more",
    "#21. Plasma Pulse III by Zeostar & Giron",
    "#22. Idols by Zafkiel7 & more",
    "#23. Semicolon 3 by TheRealXFuture",
    "#24. U235 by oleki",
    "#25. Aurora by TheKris",
    "#26. SHATTER by efext",
    "#27. Unearthed by YakobNugget & more",
    "#28. Novalis by Gryllex",
    "#29. reverence by Woom & more",
    "#30. Multition by Mulpan & Partition",
    "#31. Marathon by weoweoteo & Hinds",
    "#32. Niflheim by Vismuth",
    "#33. Twisted Tranquility by Flukester & more",
    "#34. Crowd Control by zDeadlox & more",
    "#35. Allegiance by nikrodox",
    "#36. GEODE by ImMaxX1",
    "#37. doradura by IvashkaUA",
    "#38. ILOVECYAN by AVR",
    "#39. Arcane16 by LCynox",
    "#40. Faith by ZeroSR & more",
    "#41. Reflective by Mojitoz & more",
    "#42. 8o X by f3lixsram & Yakimaru",
    "#43. Deception Dive by Rustam & mor",
    "#44. Hate War by Stormfly & more",
    "#45. Air Tech by Elevens & more",
    "#46. NecropoliX by Namtar",
    "#47. Ice Carbon Diablo X by Roadbose",
    "#48. Evangelion by Yoonsr & more",
    "#49. Sky Tech by Giron",
    "#50. Uprise by Blad3M & Menkatjezzz",
  ]

  constructor() {
  }

  getRndInteger(min:number , max:number) {
    this.randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public addClass(): void {
    const a = document.querySelector(".button") as HTMLElement;
    const b = document.querySelector("p") as HTMLElement;
    const c = document.querySelector(".button1") as HTMLElement;
    const d = document.querySelector("input") as HTMLElement;
    const e = document.querySelector(".button2") as HTMLElement;
  
    if (a) {
      a.style.display = "inline";
    }
  
    if (b) {
      b.style.display = "inline";
    }
  
    if (c) {
      c.style.display = "none";
    }

    if (d) {
      d.style.display = "inline";
    }

    if (e) {
      e.style.display = "inline";
    }
  }

  public reload():void {
    location.reload();
  }
}
