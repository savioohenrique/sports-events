// eslint-disable-next-line @typescript-eslint/naming-convention
interface ICreateGymDTO {
  name: string;

  description: string;

  cep?: string;

  number?: string;

  latitude: string;

  longitude: string;
}

export { ICreateGymDTO };
