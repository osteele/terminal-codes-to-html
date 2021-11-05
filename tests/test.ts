import { terminalCodesToHtml } from "../src";

describe("terminalCodesToHtml", () => {
  test("foreground colors", () => {
    expect(terminalCodesToHtml("\x1b[30ma")).toEqual(
      '<span style="color: black">a</span>'
    );
    expect(terminalCodesToHtml("\x1b[31ma")).toEqual(
      '<span style="color: red">a</span>'
    );
    expect(terminalCodesToHtml("\x1b[32ma")).toEqual(
      '<span style="color: green">a</span>'
    );
    expect(terminalCodesToHtml("\x1b[37ma")).toEqual(
      '<span style="color: white">a</span>'
    );
  });

  test("background colors", () => {
    expect(terminalCodesToHtml("\x1b[40ma")).toEqual(
      '<span style="background: black">a</span>'
    );
    expect(terminalCodesToHtml("\x1b[41ma")).toEqual(
      '<span style="background: red">a</span>'
    );
    expect(terminalCodesToHtml("\x1b[47ma")).toEqual(
      '<span style="background: white">a</span>'
    );
  });

  test("ends the span when the color changes", () => {
    expect(terminalCodesToHtml("\x1b[31ma\x1b[0mb")).toEqual(
      '<span style="color: red">a</span>b'
    );
    expect(terminalCodesToHtml("\x1b[31ma\x1b[mb")).toEqual(
      '<span style="color: red">a</span>b'
    );
    expect(terminalCodesToHtml("\x1b[31mred\x1b[32mgreen\x1b[34mblue")).toEqual(
      '<span style="color: red">red</span><span style="color: green">green</span><span style="color: blue">blue</span>'
    );
  });

  test.skip("skip empty spans", () => {
    expect(terminalCodesToHtml("\x1b[31m\x1b[1m")).toEqual("");
  });

  test("example", () => {
    expect(
      terminalCodesToHtml(
        "\x1b[0m \x1b[90m 5 |\x1b[39m \x1b[36mfunction\x1b[39m draw() {\x1b[0m"
      )
    ).toEqual('  5 | <span style="color: cyan">function</span> draw() {');
  });
});
