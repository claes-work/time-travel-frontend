import {ref} from 'vue'
import type {Ref} from 'vue'
import { defineStore } from 'pinia'
import type {IRecord} from "@/models/interfaces/IRecord";

export const useRecordStore = defineStore('recordStore', () => {

  const allRecords: Ref<IRecord[]> = ref([
    {
      id: 'berliner-mauerfall',
      year: 1989,
      date: '9. November',
      title: 'Fall der Berliner Mauer',
      text: 'Die Berliner Mauer, die Deutschland seit 1961 teilte, wird geöffnet. Der historische Moment markiert das Ende des Kalten Krieges und ebnet den Weg für die Wiedervereinigung Deutschlands.',
      imgSrc: 'src/assets/images/mauerfall.jpg'
    },
    {
      id: 'tiananmen-massaker',
      year: 1989,
      date: '04. Juni',
      title: 'Tiananmen-Massaker',
      text: 'Chinesische Truppen zerschlagen gewaltsam die Studentenproteste auf dem Tiananmen-Platz in Peking. Das Ereignis symbolisiert den Widerstand für politische Reformen und endet tragisch.',
      imgSrc: 'src/assets/images/mauerfall.jpg'
    },
    {
      id: 'sturz-ceaușescu-regime',
      year: 1989,
      date: '25. Dezember',
      title: 'Sturz des Ceaușescu-Regimes in Rumänien',
      text: 'Der rumänische Diktator Nicolae Ceaușescu wird nach einem Volksaufstand gestürzt und hingerichtet. Dies markiert das Ende seiner tyrannischen Herrschaft über Rumänien.',
      imgSrc: 'src/assets/images/mauerfall.jpg'
    },
    {
      id: 'paneuropaeisches-picknick',
      year: 1989,
      date: '19. August',
      title: 'Paneuropäisches Picknick',
      text: 'Bei einer grenzüberschreitenden Veranstaltung an der ungarisch-österreichischen Grenze nutzen Hunderte DDR-Bürger die Gelegenheit zur Flucht in den Westen. Das Ereignis beschleunigt den Fall des Eisernen Vorhangs.',
      imgSrc: 'src/assets/images/mauerfall.jpg'
    },
    {
      id: 'round-table-polen',
      year: 1989,
      date: '02. Mai',
      title: 'Round-Table-Gespräche in Polen',
      text: 'Regierung und Opposition in Polen beginnen einen nationalen Dialog, der zu freien Wahlen führt. Die Gespräche ebneten den Weg für eine demokratische Transformation und den Fall des kommunistischen Regimes.',
      imgSrc: 'src/assets/images/mauerfall.jpg'
    },
    {
      id: 'rumaenische-revolution',
      year: 1989,
      date: '21. Dezember',
      title: 'Rumänische Revolution',
      text: 'Der Beginn der Massenproteste in Timișoara führt zur rumänischen Revolution. Die Bevölkerung revoltiert gegen die kommunistische Herrschaft von Nicolae Ceaușescu, was schließlich zu seinem Sturz und der Umgestaltung des Landes führt.',
      imgSrc: 'src/assets/images/mauerfall.jpg'
    },
    {
      id: 'deutsche-wiedervereinigung',
      year: 1990,
      date: '03. Oktober',
      title: 'Deutsche Wiedervereinigung',
      text: 'Deutschland wird nach 45 Jahren der Teilung offiziell wiedervereinigt. Die BRD und die DDR vereinen sich zu einer Nation. Der Tag markiert das Ende des Kalten Krieges und einen historischen Moment für Deutschland.',
      imgSrc: 'src/assets/images/mauerfall.jpg'
    },
    {
      id: 'irakische-invasion',
      year: 1990,
      date: '02. August',
      title: 'Irakische Invasion Kuwaits',
      text: 'Irakische Truppen unter Saddam Hussein marschieren in Kuwait ein, was zu internationalen Protesten führt. Dieser Vorfall löst den Zweiten Golfkrieg aus, als eine von den USA geführte Koalition Irak zur Rücknahme zwingt',
      imgSrc: 'src/assets/images/mauerfall.jpg'
    },
    {
      id: 'erdbebenhilfe-konzert',
      year: 1990,
      date: '21. Dezember',
      title: 'Armenischer Erdbebenhilfe-Konzert',
      text: 'Ein Benefizkonzert unter der Leitung von Dirigent Herbert von Karajan in Berlin sammelt Spenden für die Opfer des Erdbebens in Armenien. Das Konzert wird zu einem Symbol der internationalen Solidarität.',
      imgSrc: 'src/assets/images/mauerfall.jpg'
    },
    {
      id: 'unabhaengigkeit-namibi',
      year: 1990,
      date: '17. Juli',
      title: 'Erklärung der Unabhängigkeit von Namibia',
      text: 'Namibia erklärt seine Unabhängigkeit von der südafrikanischen Besatzung. Dies markiert das Ende der langen Apartheid-Herrschaft in der Region und den Beginn eines unabhängigen Namibias.',
      imgSrc: 'src/assets/images/mauerfall.jpg'
    },
    {
      id: 'gruendung-who',
      year: 1990,
      date: '01. Mai',
      title: 'Gründung der Weltgesundheitsorganisation WHO',
      text: 'Die Weltgesundheitsorganisation WHO wird gegründet, um internationale Zusammenarbeit im Bereich der Gesundheit zu fördern. Die Organisation spielt eine Schlüsselrolle in globalen Gesundheitsfragen.',
      imgSrc: 'src/assets/images/mauerfall.jpg'
    },
    {
      id: 'freie-wahlen-ddr',
      year: 1990,
      date: '03. Dezember',
      title: 'Erste freie Wahlen in der DDR',
      text: 'Die DDR hält ihre ersten freien Wahlen ab, die den Weg für eine demokratische Regierung ebnen. Dieser Schritt ist entscheidend für die politische Entwicklung im wiedervereinigten Deutschland.',
      imgSrc: 'src/assets/images/mauerfall.jpg'
    }
  ])

  const allYears: Ref<number[]> = ref([])
  const selectedYear: Ref<number> = ref(0)

  /**
   * Iterates over all records in order to update the all year array without duplicates
   */
  function updateAllYears(): void {
    const uniqueYears = new Set<number>(allYears.value);

    allRecords.value.forEach((record: IRecord) => {
      uniqueYears.add(record.year);
    });

    // Merge unique years with the existing ones, if any
    allYears.value = Array.from(uniqueYears);
  }


  const searchString: Ref<string> = ref('')

  return {
    allRecords,
    allYears,
    updateAllYears,
    selectedYear,
    searchString
  }
})
