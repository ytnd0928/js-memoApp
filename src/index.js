//追加ボタン実行時
const onClickAdd = () => {
    //テキストボックスのElementを取得
    const textElement = document.getElementById("add-text")

    //テキストボックスの値を取得
    const text = textElement.value

    //テキストボックスを初期化
    textElement.value = ""

    //liタグ生成
    const li = document.createElement("li")

    //divタグ生成
    const div = document.createElement("div")

    //pタグ生成しテキストボックスの文字を設定
    const p = document.createElement("p")
    p.textContent = text

    //butonタグ生成(ラベルは削除)
    const button = document.createElement("button")
    button.textContent = "削除"



    //button押したときに行を削除する処理
    button.addEventListener("click", ()=> {

        //closestは親要素に一致する文字列を探すメソッド
        const deleteTarget = button.closest("li")

         //ulタグ配下から上記で特定した行を削除
        document.getElementById("memo-list").removeChild(deleteTarget)

    })

    //divタグ配下にpタグとbuttonタグを設定
    div.appendChild(p)
    div.appendChild(button)

    //liタグ配下に上記のdivタグを設定
    li.appendChild(div)

    //メモ一覧リストに上記のliタグを設定
    document.getElementById("memo-list").appendChild(li)


   
}

//追加ボタン実行時にonnCliickAdd関数を走らせる処理の実装

document.getElementById("add-button").addEventListener("click", () => onClickAdd())