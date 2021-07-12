const popupNotice = {
  code: 2000,
  message: "OK",
  data: {
    pageSize: 5,
    pageNumber: 1,
    totalPageNumber: 2,
    totalSize: 10,
    list: [
      {
        id: 1,
        title: "안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕1 ",
        pcImageUrl:
          "https://korprod-static-contents.s3.ap-northeast-2.amazonaws.com/HP-Rimankorea/popup/popup2_pc.png",
        mobileImageUrl:
          "https://korbeta-static-contents.s3.ap-northeast-2.amazonaws.com/HP-Botalab/banner/보타랩_피씨배너1.png",
        popupLink: "http://popup.com/123",
        exposureStartDatetime: "2020-01-02 13:41:11",
        exposureEndDatetime: "2020-03-12 13:41:11",
        status: true,
        modifiedUser: {
          name: "관리자",
        },
        modifiedDatetime: "2020-03-12 13:41:11",
      },
      {
        id: 2,
        title: "안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕12 ",
        pcImageUrl:
          "https://korprod-static-contents.s3.ap-northeast-2.amazonaws.com/HP-Rimankorea/popup/popup2_pc.png",
        mobileImageUrl:
          "https://korbeta-static-contents.s3.ap-northeast-2.amazonaws.com/HP-Rimankorea/popup/temp06.jpg",
        popupLink: "http://popup.com/123",
        exposureStartDatetime: "2020-01-02 13:41:11",
        exposureEndDatetime: "2020-03-12 13:41:11",
        status: true,
        modifiedUser: {
          name: "관리자",
        },
        modifiedDatetime: "2020-03-12 13:41:11",
      },
      {
        id: 3,
        title:
          "안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕123 ",
        pcImageUrl:
          "https://korbeta-static-contents.s3.ap-northeast-2.amazonaws.com/HP-Rimankorea/popup/temp06.jpg",
        mobileImageUrl:
          "https://korbeta-static-contents.s3.ap-northeast-2.amazonaws.com/HP-Rimankorea/popup/temp06.jpg",
        popupLink: "http://popup.com/123",
        exposureStartDatetime: "2020-01-02 13:41:11",
        exposureEndDatetime: "2020-03-12 13:41:11",
        status: true,
        modifiedUser: {
          name: "관리자",
        },
        modifiedDatetime: "2020-03-12 13:41:11",
      },
      {
        id: 4,
        title:
          "안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕1234 ",
        pcImageUrl:
          "https://korbeta-static-contents.s3.ap-northeast-2.amazonaws.com/HP-Rimankorea/popup/temp06.jpg",
        mobileImageUrl:
          "https://korbeta-static-contents.s3.ap-northeast-2.amazonaws.com/HP-Rimankorea/popup/temp06.jpg",
        popupLink: "http://popup.com/123",
        exposureStartDatetime: "2020-01-02 13:41:11",
        exposureEndDatetime: "2020-03-12 13:41:11",
        status: true,
        modifiedUser: {
          name: "관리자",
        },
        modifiedDatetime: "2020-03-12 13:41:11",
      },
      {
        id: 5,
        title: "안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 ",
        pcImageUrl:
          "https://korbeta-static-contents.s3.ap-northeast-2.amazonaws.com/HP-Rimankorea/popup/temp06.jpg",
        mobileImageUrl:
          "https://korbeta-static-contents.s3.ap-northeast-2.amazonaws.com/HP-Rimankorea/popup/temp06.jpg",
        popupLink: "http://popup.com/123",
        exposureStartDatetime: "2020-01-02 13:41:11",
        exposureEndDatetime: "2020-03-12 13:41:11",
        status: true,
        modifiedUser: {
          name: "관리자",
        },
        modifiedDatetime: "2020-03-12 13:41:11",
      },
    ],
  },
};

const hi = {
  getPopupList: () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(popupNotice.code);
      }, 2000);
    });
  },
};
module.exports = hi;
