import React, { useState, useEffect } from 'react';
import './styles.scss';

let AngleDown = require('../../assets/icons/angle-down.svg');

type Props = {
  id: any,
  data: [],
  placeholder: string,
  multiple: boolean,
  dataLabel: string,
  value: [],
  disabled: boolean,
  onChange: (selection: any) => void,
  className: string
}

export default ({
  id,
  data = [],
  placeholder = 'Select',
  multiple = false,
  dataLabel,
  value = [],
  disabled = false,
  onChange,
  className,
}: Props) => {
  const [isActive, setActive] = useState(false);
  const [isDisabled, setDisabled] = useState(disabled);
  const [selected, setSelected] = useState(value as any);

  const isSelected = (value: []) => selected.includes(value);
  const hasData = data.length > 0;
  const hasSelected = selected.length > 0;
  const isAllSelected = selected.length === data.length;

  const handleClick = () => {
    if (!isDisabled) setActive(!isActive);
  };

  const toggleAll = () => {
    const selection: any = isAllSelected ? [] : [...data];
    setSelected(selection);
    onChange(selection);
  };

  const toggleSelection = (item: any) => {
    let selection;

    if (multiple) {
      selection = [...selected];
      let index = selection.indexOf(item);
      if (index > -1) {
        selection.splice(index, 1);
      } else {
        selection.push(item);
      }
    } else selection = [item];

    setSelected(selection);
    if (!multiple) setActive(false);
    if (onChange) onChange(multiple ? selection : item);
  };

  const getSelectionText = () => {
    if (!hasData) return 'No options';
    if (!hasSelected) return placeholder;
    if (multiple && isAllSelected) return 'All Selected';

    const firstOption = selected[0];
    if (firstOption && firstOption[dataLabel]) return `${firstOption[dataLabel]}`;

    return '-';
  };

  const selectionText = getSelectionText();
  const offsetText = !isAllSelected && selected.length > 1 && `+ ${selected.length - 1}`;

  useEffect(() => {
    setDisabled(!hasData);
  }, [data]); //eslint-disable-line

  return (
    <fieldset
      disabled={isDisabled}
      onMouseLeave={() => setActive(false)}
      className={`dropdown ${className || ''} ${isActive ? 'active' : ''} ${multiple ? 'multiple' : ''}`}
    >
      <button
        className="btn trigger"
        onClick={handleClick}
        title={`${selectionText}${offsetText ? ` ${offsetText}` : ''}`}
      >
        {selectionText}
        {offsetText && <strong>{offsetText}</strong>}
        <AngleDown />
      </button>
      <div className="options">
        <ul>
          {data.length > 0 && (
            <>
              {multiple && (
                <li>
                  <button
                    title="Select All"
                    onClick={() => toggleAll()}
                    className={hasSelected ? (isAllSelected ? 'selected' : 'partial') : ''}
                  >
                    Select All
                  </button>
                </li>
              )}
              {data.map((item) => {
                const key = item[dataLabel];
                return (
                  <li key={`${id}-option-${key}`}>
                    <button
                      title={key}
                      onClick={() => toggleSelection(item)}
                      className={isSelected(item) ? 'selected' : ''}
                    >
                      {key}
                    </button>
                  </li>
                );
              })}
            </>
          )}
        </ul>
      </div>
    </fieldset>
  );
};
