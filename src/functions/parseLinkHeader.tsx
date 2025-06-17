/*
The MIT License
Copyright (c) 2018 René Dang
Permission is hereby granted, free of charge,
to any person obtaining a copy of this software and
associated documentation files (the "Software"), to
deal in the Software without restriction, including
without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom
the Software is furnished to do so,
subject to the following conditions:
The above copyright notice and this permission notice
shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

function parseLinkHeader(header: string): Map<string, Map<string, string>> {
  if (header.length === 0) {
    throw new Error("input must not be of zero length");
  }

  const parts = header.split(",");
  const links: Map<string, Map<string, string>> = new Map();
  parts.forEach((part) => {
    const section: string[] = part.split(";");
    if (section.length !== 2) {
      throw new Error("section could not be split on ';'");
    }
    const url = new URL(section[0].replace(/<(.*)>/, "$1").trim());
    const params = url.searchParams;
    const name = section[1].replace(/rel="(.*)"/, "$1").trim();
    const link: Map<string, string> = new Map();
    link.set("url", url.toString());
    link.set("rel", name);
    for (const [key, value] of params) {
      link.set(key, value);
    }
    links.set(name, link);
  });

  return links;
}

export default parseLinkHeader;
