import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const EditorBlock = styled.form`
  position: absolute;
  top: 8rem;
  left: 12rem;
  padding-left: 5rem;
  padding-right: 5rem;
  width: 1600px;
  margin: 0 auto;
  height: calc(100% - 8rem);
  .image-label {
    border: 1px dotted ${palette.teal[4]};
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    label {
      cursor: pointer;
      height: 80%;
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${palette.teal[4]};
      font-family: 'Nanum-Gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
      &:hover {
        color: ${palette.teal[7]};
        font-weight: bold;
      }
    }
  }

  @media (max-width: 1600px) {
    width: 1200px;
  }
  @media (max-width: 1400px) {
    width: 1024px;
  }
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
const StyledInput = styled.input`
  font-size: 1.125rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
`;
const ImageInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
const WriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
  height: 2.125rem;
  display: flex;
  justify-content: flex-end;
  button + button {
    margin-left: 0.5rem;
  }
`;
const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const Editor = ({
  onChangeField,
  onPublish,
  onCancel,
  name,
  category,
  price,
  volume,
  donationRatio,
  image,
}) => {
  const onChangeName = (e) => {
    onChangeField({ key: 'name', value: e.target.value });
  };
  const onChangeCategory = (e) => {
    onChangeField({ key: 'category', value: e.target.value });
  };
  const onChangePrice = (e) => {
    onChangeField({ key: 'price', value: e.target.value });
  };
  const onChangeVolume = (e) => {
    onChangeField({ key: 'volume', value: e.target.value });
  };
  const onChangeDonationRatio = (e) => {
    onChangeField({ key: 'donationRatio', value: e.target.value });
  };
  const onChangeImage = (e) => {
    onChangeField({ key: 'image', value: e.target.files[0] });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onPublish();
  };

  return (
    <EditorBlock
      encType="multipart/form-data"
      method="post"
      onSubmit={onSubmit}
    >
      <StyledInput
        placeholder="제목을 입력하세요"
        onChange={onChangeName}
        value={name}
        name="name"
      />
      <StyledInput
        placeholder="카레고리를 입력하세요"
        onChange={onChangeCategory}
        value={category}
        name="category"
      />
      <StyledInput
        placeholder="가격을 입력하세요"
        onChange={onChangePrice}
        value={price}
        name="price"
      />
      <StyledInput
        placeholder="최대수량을 입력하세요"
        onChange={onChangeVolume}
        value={volume}
        name="volume"
      />
      <StyledInput
        placeholder="추가 기부비율을 입력하세요"
        onChange={onChangeDonationRatio}
        value={donationRatio}
        name="donationRatio"
      />

      <div className="image-label">
        <label htmlFor="image">
          <i className="fas fa-upload"></i>
          이미지 업로드
        </label>
      </div>
      <ImageInput
        type="file"
        name="image"
        accept="image/*"
        id="image"
        className="image-input"
        onChange={onChangeImage}
      ></ImageInput>
      <WriteActionButtonsBlock>
        <StyledButton teal type="submit">
          품목 추가
        </StyledButton>
        <StyledButton red onClick={onCancel}>
          취소
        </StyledButton>
      </WriteActionButtonsBlock>
    </EditorBlock>
  );
};

export default Editor;
