import React, { Component } from "react";
import ItemPresenter from "./ItemPresenter";

export default class extends Component {
  state = {
    item: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      let item;
      const a = new Promise((resolve, reject) => {
        setTimeout(
          () =>
            resolve({
              item: {
                category: "라면",
                title: "농심 신라면 5개입",
                url: "",
                price: 2500,
                unit: "1묶음",
                collected: 20,
                target: 100,
                message:
                  "안녕하세요 후원자 여러분!\n코로나 19의 유행으로 자원봉사자분들의 발걸음이 뜸해지며 물품 후원까지도 덩달아 끊긴 요즘입니다.\n큰 마음을 작은 물품에 담아 후원해주시면 아이들이 더 행복하고 밝게 성장할 수 있습니다. 감사드립니다.",
                organization: {
                  name: "A",
                  address: "서울시 광진구",
                  type: "아동양육시설",
                  liked: 137,
                },
              },
            }),
          1000
        );
      });
      await a.then((res) => {
        item = res.item;
      });
      this.setState({ item });
    } catch {
      this.setState({ error: "error" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { item, loading, error } = this.state;
    return <ItemPresenter item={item} loading={loading} error={error} />;
  }
}
