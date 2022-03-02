import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
const ReactGridLayout = WidthProvider(RGL);
//const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class DragFromOutsideLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    cols: 25,
    rowHeight: 100,
    margin: [2, 2],
    preventCollision: true,
    resizeHandles: ['e'],
    compactType: null,
    //autoSize: true
  };

  state = {
    currentBreakpoint: "lg",
    compactType: "vertical",
    mounted: false,
    //layouts: { lg: generateLayout() }
  };

//   componentDidMount() {
//     this.setState({ mounted: true });
//   }

//   generateDOM() {
//     return _.map(this.state.layouts.lg, function(l, i) {
//       return (
//         <div key={i} className={l.static ? "static" : ""}>
//           {l.static ? (
//             <span
//               className="text"
//               title="This item is static and cannot be removed or resized."
//             >
//               Static - {i}
//             </span>
//           ) : (
//             <span className="text">{i}</span>
//           )}
//         </div>
//       );
//     });
//   }

//   onBreakpointChange = breakpoint => {
//     this.setState({
//       currentBreakpoint: breakpoint
//     });
//   };

//   onCompactTypeChange = () => {
//     const { compactType: oldCompactType } = this.state;
//     const compactType =
//       oldCompactType === "horizontal"
//         ? "vertical"
//         : oldCompactType === "vertical"
//         ? null
//         : "horizontal";
//     this.setState({ compactType });
//   };

//   onLayoutChange = (layout, layouts) => {
//     this.props.onLayoutChange(layout, layouts);
//   };

//   onNewLayout = () => {
//     this.setState({
//       layouts: { lg: generateLayout() }
//     });
//   };

  onDrop = (layout, layoutItem, _event) => {
    alert(`Dropped element props:\n${JSON.stringify(layoutItem, ['x', 'y', 'w', 'h'], 2)}`);
  };

  render() {
    return (
      <div>
        <div
          className="droppable-element"
          draggable={true}
          unselectable="on"
          style={{position:"absolute", zIndex:99}}
          // this is a hack for firefox
          // Firefox requires some kind of initialization
          // which we can do by adding this attribute
          // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
          onDragStart={e => e.dataTransfer.setData("text/plain", "")}
        >
          Droppable Element (Drag me!)
        </div>
        <ReactGridLayout
          {...this.props}
        //   layouts={this.state.layouts}
        //   onBreakpointChange={this.onBreakpointChange}
        //   onLayoutChange={this.onLayoutChange}
          onDrop={this.onDrop}
          // WidthProvider option
        //   measureBeforeMount={false}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
        //   useCSSTransforms={this.state.mounted}
        //   compactType={this.state.compactType}
        //   preventCollision={!this.state.compactType}
          isDroppable={true}
        >
        <div key={"j"}>
            <span className="text">{"hge;p"}</span>
        </div>
          {/*this.generateDOM()*/}
        </ReactGridLayout>
      </div>
    );
  }
}

// function generateLayout() {
//   return _.map(_.range(0, 25), function(item, i) {
//     var y = Math.ceil(Math.random() * 4) + 1;
//     return {
//       x: Math.round(Math.random() * 5) * 2,
//       y: Math.floor(i / 6) * y,
//       w: 2,
//       h: y,
//       i: i.toString(),
//       static: Math.random() < 0.05
//     };
//   });
// }