import {
    LitElement,
    html,
    css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

class ToDoItem extends LitElement {
    static properties = {
        text: { type: String },
        complete: { type: Boolean },
    };

    constructor() {
        super();

        this.text = "";
        this.complete = false;
    }

    static styles = css`
        :host {
            font-family: "Roboto", sans-serif;
        }

        .todo-container {
            list-style-type: none;
            padding: 0.5rem;
            border-bottom: 0.0325rem solid #fff;
            border-radius: 0.25rem;
            margin: 0;

            display: flex;
            align-items: center;
            gap: 1rem;

            color: #000;
            text-decoration: none;

            &:where(:hover, :focus-visible) {
                cursor: pointer;
                background-color: #efeeea;
                border-color: #fff2;
            }
        }

        label {
            display: none;
        }

        input[type="checkbox"] {
            width: 1rem;
            height: 1rem;
            cursor: pointer;

            accent-color: #35b21e;
        }

        .todo-text {
            font-size: 1rem;

            flex-grow: 1;
            padding: 0 1rem;
        }

        .todo-text.complete {
            text-decoration: line-through;
            color: #a9a9a9;
        }

        .delete-button {
            background: none;
            border: none;
            cursor: pointer;
        }

        .delete-button img {
            width: 2.5rem;
            height: 2.5rem;
        }
    `;

    render() {
        return html`
            <div class="todo-container">
                <label></label>
                <input
                    type="checkbox"
                    ?checked=${this.complete}
                    @change=${this.toggleComplete}
                />
                <div class="todo-text ${this.complete ? "complete" : ""}">
                    ${this.text}
                </div>
                <button class="delete-button" @click=${this.removeTodo}>
                    <img src="../images/delete-icon.svg" alt="Delete" />
                </button>
            </div>
        `;
    }

    toggleComplete() {
        this.complete = !this.complete;
    }

    removeTodo() {
        this.remove();
    }
}

customElements.define("todo-item", ToDoItem);
