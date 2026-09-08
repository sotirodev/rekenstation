export interface ZonnepanelenInput {
  investering: number;
  jaarlijkseOpbrengstKwh: number;
  stroomprijsPerKwh: number;
  onderhoudskostenPerJaar: number;
}

export interface ZonnepanelenResult {
  jaarlijkseBesparing: number;
  terugverdientijdJaren: number | null;
}

export function berekenZonnepanelen({
  investering,
  jaarlijkseOpbrengstKwh,
  stroomprijsPerKwh,
  onderhoudskostenPerJaar,
}: ZonnepanelenInput): ZonnepanelenResult {
  const jaarlijkseBesparing = jaarlijkseOpbrengstKwh * stroomprijsPerKwh - onderhoudskostenPerJaar;

  return {
    jaarlijkseBesparing,
    terugverdientijdJaren: jaarlijkseBesparing > 0 ? investering / jaarlijkseBesparing : null,
  };
}
