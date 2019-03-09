
console.log('App.js is running');

var app = {
  title: 'meu app',
  subtitle: 'meu app em react',
  'options': []
};

const onFormSubmit = (e) =>{
  e.preventDefault();

  const option = e.target.elements.option.value;
  
  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
}

const remove = () => {
  app.options = []
  render();
}

const onMakeDecision = () => {
  const random = Math.floor(Math.random() * app.options.length);
  
}

const render = () => {
  var template = (
    <div>
      <h1> {app.title} </h1>
      <p>{app.subtitle}</p>
      <p>{app.options.length > 0 ? 'here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
      <p>{app.options[onMakeDecision]}</p>
      <ol>
        {
          app.options.map((op, i) => {
            return <li key={i}>{op}</li>;
          })
        }
      </ol>
      <button onClick={remove}>Remove all</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

render()