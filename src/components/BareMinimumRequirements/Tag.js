import { useState } from 'react';
import styled from 'styled-components';

// TODO: Styled-Component 라이브러리를 활용해 여러분만의 tag 를 자유롭게 꾸며 보세요!

export const TagsInput = styled.div`
  margin: 4rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 48px;
  /* width: 480px; */
  width: 100%;
  overflow-x: auto;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;
    
    /* width: 50%; */
    /* overflow: auto;
    &::webkit-scrollbar{
      display: none;
    } */

    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      /* color: #000; */
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 6px;
      margin: 0 8px 8px 0;
      background: var(--coz-purple-600);
      > .tag-title {
        color: #fff;
      }
      > .tag-close-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        line-height: 1;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: var(--coz-purple-600);
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
      }
    }
  }

  > input {
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    :focus {
      outline: transparent;
    }
  }

  &:focus-within {
    border: 1px solid var(--coz-purple-600);
  }
`;

export const Tag = () => {
  const initialTags = ['CodeStates', 'kimcoding'];

  const [tagValue, setTagValue] = useState('');
  const [tags, setTags] = useState(initialTags);
  const removeTags = (indexToRemove) => {
    // TODO : 태그를 삭제하는 메소드를 완성하세요.
    const deleteArr = tags.filter((el,index) => index !== indexToRemove)
    setTags([...deleteArr])
  };

  const addTags = (event) => {
    console.log(event);

    if(!tags.includes(event) && event.length > 0 && event !== ' '){
      setTags([...tags, event]);
      setTagValue("");
    }
  };

  return (
    <>
      <TagsInput>
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span className="tag-close-icon" onClick={() => removeTags(index)}>
              x
              </span>
            </li>
          ))}
        </ul>
        <input
          className="tag-input"
          type="text"
          value={tagValue}
          onChange={(e) => setTagValue(e.target.value)}
          onKeyUp={(e) => {
            {
              /* 키보드의 Enter 키에 의해 addTags 메소드가 실행되어야 합니다. */
              e.key === 'Enter' && addTags(e.target.value)
            }
          }}
          placeholder="Press enter to add tags"
        />
      </TagsInput>
    </>
  );
};
