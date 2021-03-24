const placeholder = `# Welcome to my EPIC Markdown Previewer!!!

## Wow an H2 header

[hmmm links](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

\`I am inline code wowie\`

\`\`\`
Multi
Line
Code
Epic
\`\`\`

- lists
  - are
    - quite
      - epic
        - lol
          - ok I think the rest of these will be square points

> BLOCK QUOTE

**And now an image, cool!!!**
![bruh](https://bit.ly/3lHAKhA)`;

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + "</a>";
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "editor-container" }, /*#__PURE__*/
      React.createElement(Editor, { markdown: this.state.markdown, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { id: "preview-container" }, /*#__PURE__*/
      React.createElement(Preview, { markdown: this.state.markdown }))));



  }}


const Editor = props => {
  return /*#__PURE__*/(
    React.createElement("textarea", {
      id: "editor",
      onChange: props.onChange,
      type: "text",
      value: props.markdown }));


};

const Preview = props => {
  return /*#__PURE__*/(
    React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: marked(props.markdown, { renderer: renderer, breaks: true }) },

      id: "preview" }));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));