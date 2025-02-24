export function convertFullWidthToHalfWidth(input: string): string {
  return input.replace(/[０-９]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0xfee0)
  );
}
