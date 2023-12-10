const AuthToken = async (token: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth?token=${token}`);
    const data = await res.json();
    if (data.code === 0) {
      // 認証成功
      return true;
    }else{
      // 認証エラー
      console.log("エラーが発生しました: ");
      return false;
    }
  } catch (err) {
    console.log("エラーが発生しました: ", err);
    return false;
  }
}
