import React, {useState, useEffect, useRef, useCallback} from 'react';
import ReactModal from 'react-modal';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import './index.scss';
import axios from 'axios';

interface TableProps {
  /**
   * valor que muestra el input
   */
  items: any[];
  /**
   * tipo de dato que tendrá la caja de texto
   */
  thead: any[];
  customColumns: boolean;
  customDensity: boolean;
}

/**

 */
const SmartTable = ({
  items,
  thead,
  customColumns,
  customDensity,
}: TableProps) => {
  const [density, setDensity] = useState('condensed');
  const [toggleModal, setToggleModal] = useState<any>(false);
  const [header, setHeader] = useState<any>(thead);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [newItems, setItems] = useState(items);
  const [hasMore, setHasMore] = useState(false);

  function handleOnDragEnd(result: any) {
    if (!result?.destination) return;
    const items = Array.from(header);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setHeader(items);
  }

  const handleChecked = (e: any, i: any) => {
    const newArr: any = Array.from(header);
    newArr[i].active = e.target.checked;

    setHeader(newArr);
  };

  useEffect(() => {
    setLoading(true);

    let cancel;
    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: {q: 'angel', page: pageNumber},
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res: {data: {docs: string | any[]}}) => {
        setItems((prevItems) => {
          return [...new Set([...prevItems, ...res.data.docs])];
        });
        console.log(res.data.docs);
        setHasMore(res.data.docs.length > 0);
        setLoading(false);
      })
      .catch((e: any) => {
        console.log(e);
      });
  }, [pageNumber]);

  const observer: any = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <article className="terminal">
      <section className="animate__animated animate__fast animate__fadeIn">
        <section className="terminal--filter m-1">
          <div className="h-20 self-end">
            {customColumns && (
              <button
                className="btn btn-secondary p-0"
                onClick={() => setToggleModal(!toggleModal)}>
                <span className="p-1 m-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="18"
                    viewBox="0 0 34 18">
                    <line
                      id="Line_8"
                      data-name="Line 8"
                      y2="18"
                      transform="translate(5)"
                      fill="none"
                      stroke="#707070"
                      stroke-width="10"
                    />
                    <line
                      id="Line_9"
                      data-name="Line 9"
                      y2="18"
                      transform="translate(17)"
                      fill="none"
                      stroke="#707070"
                      stroke-width="10"
                    />
                    <line
                      id="Line_10"
                      data-name="Line 10"
                      y2="18"
                      transform="translate(29)"
                      fill="none"
                      stroke="#707070"
                      stroke-width="10"
                    />
                  </svg>
                </span>
              </button>
            )}
            {customDensity && (
              <>
                <button
                  className="btn btn-secondary mx-2"
                  onClick={() => setDensity('condensed')}>
                  Condensed
                </button>
                <button
                  className="btn btn-secondary mx-2"
                  onClick={() => setDensity('regular')}>
                  Regular
                </button>
                <button
                  className="btn btn-secondary mx-2"
                  onClick={() => setDensity('relaxed')}>
                  Relaxed
                </button>
                {/* <div className="has-tooltip">
                  <span className="tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8">
                    Some Nice Tooltip Text
                  </span>
                  Custom Position (above)
                </div> */}
              </>
            )}
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-start max-h-screen">
              <div className="flex justify-between  px-12   table-container table-container--tables">
                <table className="m-0">
                  <thead>
                    <tr>
                      {header &&
                        header.length > 0 &&
                        header.map((item: any, i: any) => {
                          if (item.active) {
                            return (
                              <th colSpan={item.colspan} key={i}>
                                {item.title}
                              </th>
                            );
                          }
                        })}
                    </tr>
                  </thead>
                  <tbody className="py-2 h-full">
                    {items.map((data: any, index: any) => (
                      <>
                        <tr className={density}>
                          {header &&
                            header.length > 0 &&
                            header.map((item: any, i: any) => {
                              if (item.active) {
                                if (items.length === index + 1) {
                                  return (
                                    <td ref={lastElementRef}>
                                      {data[item.col_id]}
                                    </td>
                                  );
                                } else {
                                  return <td>{data[item.col_id]}</td>;
                                }
                              }
                            })}
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </section>
      <ReactModal
        className="popUp popUp-column"
        isOpen={toggleModal}
        onRequestClose={() => setToggleModal(!toggleModal)}
        style={{overlay: {background: 'rgba(0, 0, 0, 0.50)'}}}>
        <header className="popUp--header">
          <h3 className="popUp--header__title">Personalizar Columnas</h3>
          <button
            className="btn popUp--header__closeButton"
            onClick={() => {
              setToggleModal(!toggleModal);
            }}>
            <span className="icofont-close-circled"></span>
          </button>
        </header>
        <section className="popUp--body w-full">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="columns">
              {(provided) => (
                <ul
                  className="list-none draggable-list p-0"
                  {...provided.droppableProps}
                  ref={provided.innerRef}>
                  {header &&
                    header.length > 0 &&
                    header.map((item: any, i: any) => (
                      <Draggable
                        key={item.title}
                        draggableId={item.title}
                        isDragDisabled={!item.active}
                        index={i}>
                        {(provided) => (
                          <li
                            className={`my-2 shadow-md bg-white ${
                              !item.active && 'text-disabled shadow-none'
                            }`}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                            <div className="pr-10">
                              <input
                                type="checkbox"
                                checked={item.active}
                                onChange={(e) => handleChecked(e, i)}
                              />
                              {item.title}
                            </div>

                            {!item.active ? (
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  width="20px"
                                  fill="#c7c7c9">
                                  <path d="M416 288C433.7 288 448 302.3 448 320C448 337.7 433.7 352 416 352H32C14.33 352 0 337.7 0 320C0 302.3 14.33 288 32 288H416zM416 160C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224H32C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160H416z" />
                                </svg>
                              </span>
                            ) : (
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  fill="#454951"
                                  width="20px">
                                  <path d="M416 288C433.7 288 448 302.3 448 320C448 337.7 433.7 352 416 352H32C14.33 352 0 337.7 0 320C0 302.3 14.33 288 32 288H416zM416 160C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224H32C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160H416z" />
                                </svg>
                              </span>
                            )}
                          </li>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
          <div className="flex justify-end mt-3">
            <button
              className="btn-secondary mx-2"
              onClick={() => {
                setToggleModal(!toggleModal);
              }}>
              Cerrar
            </button>
          </div>
        </section>
      </ReactModal>
    </article>
  );
};

export default SmartTable;
