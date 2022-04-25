import React, { useState, useEffect } from 'react';

function InfoEffect(props) {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('effect');
    console.log(name);

    //클린업 실행
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
}

export default InfoEffect;
