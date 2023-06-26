import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache
} from "react-virtualized";
import faker from "faker";
import { useEffect, useRef, useState } from "react";

function VirtualizeList() {
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultWidth: 100
    })
  );
  const [people, setPeople] = useState([]);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setPeople(
      [...Array(1000).keys()].map((key) => {
        return {
          id: key,
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          bio: faker.lorem.lines(Math.random() * 100)
        };
      })
    );
  }, []);

  useEffect(() => {
    const internval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(internval);
  }, []);

  return (
    <div className="">
      <h1>VirtualizedList</h1>
      <div style={{ width: "100%", height: "100vh" }}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={cache.current.rowHeight}
              deferredMeasurementCache={cache.current}
              rowCount={people.length}
              //row render responsible to render each row
              rowRenderer={({ key, index, style, parent }) => {
                //index help us to find the person who we want from the array
                const person = people[index];
                return (
                  <CellMeasurer key={key} cache={cache.current} parent={parent} columnIndex={0} rowIndex={index}>
                    <div key={key} style={style}>
                      <h2>{person.name}</h2>
                      <h2 style={{fontWeight: 'Normal'}}>{person.bio}</h2>
                    </div>
                  </CellMeasurer>
                );
              }}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
}

export default VirtualizeList;
