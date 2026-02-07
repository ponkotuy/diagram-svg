type Svg = {
  file: string;
  name: string;
  author: string;
  company?: string;
};

function renderMenu(svgs: Svg[]): void {
  const menuDiv = document.getElementById('menu');
  if (!menuDiv) return;
  const ul = document.createElement('ul');
  ul.className = 'collection';
  for (const svg of svgs) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    const a = document.createElement('a');
    a.href = `index.html?url=${svg.file}`;
    a.textContent = svg.company
      ? `${svg.company}-${svg.name}(${svg.author})`
      : `${svg.name}(${svg.author})`;
    li.appendChild(a);
    ul.appendChild(li);
  }
  menuDiv.appendChild(ul);
}

fetch('./svg_list.json')
  .then(res => res.json())
  .then((svgs: Svg[]) => renderMenu(svgs));
