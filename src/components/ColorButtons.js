import React from "react";

export default function ColorButtons(props) {
  return (
    <>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-outline-primary"
          id="blue"
          onClick={props.toggle}
        >
          Blue
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          id="grey"
          onClick={props.toggle}
        >
          Grey
        </button>
        <button
          type="button"
          className="btn btn-outline-success"
          id="green"
          onClick={props.toggle}
        >
          Green
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          id="red"
          onClick={props.toggle}
        >
          Red
        </button>
        <button
          type="button"
          className="btn btn-outline-warning"
          id="yellow"
          onClick={props.toggle}
        >
          Yellow
        </button>
        <button
          type="button"
          className="btn btn-outline-info"
          id="sky-blue"
          onClick={props.toggle}
        >
          Sky-Blue
        </button>
      </div>
      <button
        type="button"
        id="reset"
        className="btn btn-secondary mx-2"
        onClick={props.toggle}
      >
        Reset
      </button>
    </>
  );
}
