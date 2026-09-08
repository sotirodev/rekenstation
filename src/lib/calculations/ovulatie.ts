export interface OvulatieInput {
  laatsteMenstruatie: string;
  cyclusDuur: number;
}

export interface OvulatieResult {
  ovulatiedatum: string;
  vruchtbareperiodeStart: string;
  vruchtbareperiodeEind: string;
  volgendeMenstruatie: string;
}

/** De luteale fase (na de eisprong) duurt vrijwel altijd ongeveer 14 dagen. */
const LUTEALE_FASE_DAGEN = 14;

function addDagen(iso: string, dagen: number): string {
  const datum = new Date(iso);
  datum.setDate(datum.getDate() + dagen);
  return datum.toISOString().slice(0, 10);
}

export function berekenOvulatie({ laatsteMenstruatie, cyclusDuur }: OvulatieInput): OvulatieResult {
  const dagVanOvulatie = cyclusDuur - LUTEALE_FASE_DAGEN;

  return {
    ovulatiedatum: addDagen(laatsteMenstruatie, dagVanOvulatie),
    vruchtbareperiodeStart: addDagen(laatsteMenstruatie, dagVanOvulatie - 5),
    vruchtbareperiodeEind: addDagen(laatsteMenstruatie, dagVanOvulatie + 1),
    volgendeMenstruatie: addDagen(laatsteMenstruatie, cyclusDuur),
  };
}
