function showCategories() {
  const items = document.querySelectorAll('.item');
  console.log(`Number of categories: ${items.length}`);
  items.forEach(item => {
    const catName = item.querySelector('h2').textContent;
    console.log(`Category: ${catName}`);
    const countOptions = item.querySelectorAll('li').length;
    console.log(`Elements: ${countOptions}`);
  });
  console.log();
}
showCategories();
