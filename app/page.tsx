import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <span className="LikeTitle">匿名でActiveTK․に質問 - ActiveTK.jp</span>
        <br />
        <span className="subTitle">匿名でActiveTK․に質問ができます。返信は<a href="https://twitter.com/ActiveTK5929" target="_blank">Twitter</a>で行います。</span>
        <br /><br /><hr color="black" />
        <form action="/send" method="POST" id="createQuestion">
          【質問内容】<br />
          <textarea name="contact_data" id="contact_data" placeholder="内容をこちらへ入力してください" className="contactIn" required></textarea>
          <br />
          <pre>※本フォーム内に、個人情報を入力しないでください。</pre>
          <br />
          <input type="submit" value="送信" className="sendbtn buttonOutlineGradient buttonOutlineGradient_item" />
          <br /> 
          質問の内容はTwitterに公開されます。<br />
          また、質問によっては返信に時間がかかる場合がございます。
        </form>
      </div>
    </main>
  )
}
