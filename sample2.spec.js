describe('done todo', function () {
    let page;

    before (async function () {
      page = await browser.newPage();
      await page.goto("http://127.0.0.1:7001");
    });
  
    after (async function () {
      await page.close();
    });

    it('should clicked correct', async function() {
        page.evaluate(() => {
          let elements = document.getElementsByClassName('toggle');
          elements[elements.length - 1].click();
          console.log(elements.length - 1);
        });
      })
    it('should done todo correct', async function() {
        let todoList = await page.waitFor('#todo-list');
        const expectStatus = await page.evaluate(todoList => todoList.lastChild.querySelector('input').checked, todoList);
        expect(expectStatus).to.eql(true);
    })
})