export interface Frame {
  code: string;
  description: string;
}

export const getDefaultFrame = (): Frame => {
  return {
    code: `console.log("Hello World!")`,
    description: "This is default frame.",
  };
};
