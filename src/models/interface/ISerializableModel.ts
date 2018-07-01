interface ISerializebleModel<T> {
  deserialize(jsonObject: string): T;
  serialize(object: T): string;
}
