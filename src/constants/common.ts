export const levelTitle = {
  0: 'Mới bắt đầu',
  1: 'Biết bơi',
  2: 'Chuyên nghiệp',
}

export interface INew {
  id: number
  title: string
  description: string
  thumbnail: string
  youtubeId: string
  body: Array<{
    title: string
    content: string[]
  }>
}

export const news: INew[] = [
  {
    id: 1,
    title: 'Làm quen với bơi lội',
    description: 'Hướng dẫn cách khởi động trước khi bơi',
    thumbnail: 'https://www.dayboi.net/images/products/details/hinh-anh-ho-boi-sun-swimming-4.jpg',
    youtubeId: 'uzcdMijTVGc',
    body: [
      {
        title: 'Khởi động (10 phút)',
        content: [
          'Xoay các khớp: Cổ tay, cổ chân, vai, gối – 2 tới 3 phút mỗi khớp',
          'Căng cơ tay, chân, cơ lưng và cơ ngực: Tập căng cơ mỗi nhóm cơ trong khoảng 30 giây.',
          'Chạy bộ hoặc nhảy nhẹ tại chỗ: 3-5 phút để làm nóng cơ thể, có thể kết hợp với chống đẩy hoặc plank.',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Làm quen với nước và kỹ thuật thở',
    description: 'Hướng dẫn cách lấy hơi và hít thở',
    thumbnail:
      'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/cac_buoc_co_ban_day_boi_cho_tre_4_f4b864ae5a.jpg',
    youtubeId: 'd-n8fT61bJM',
    body: [
      {
        title: 'Làm quen với nước (15 phút)',
        content: [
          'Ngâm mặt trong nước, thổi bong bóng qua mũi: 10 - 15 lần (mỗi lần kéo dài 5-7 giây).',
          'Nhúng đầu xuống nước, giữ hơi thở 5 - 10 giây, thổi bong bóng qua mũi: Lặp lại 10 - 15 lần.',
          'Hít vào bằng miệng, thở ra bằng mũi: Hít vào nhanh (2 giây), thở ra từ từ liên tục (4 giây). Thực hiện 10 - 15 lần.',
        ],
      },
      {
        title: 'Kỹ thuật thở cơ bản (20 phút)',
        content: [
          'Thực hành nhịp thở: Hít vào nhanh – thở ra chậm dưới nước cho tới khi hết hơi (5-7 nhịp/lần).',
          'Sử dụng phao để tập thở khi giữ thăng bằng trên mặt nước (ngóc đầu lên lấy hơi thẳng như bơi ếch)',
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Động tác chân bơi ếch',
    description: 'Hướng dẫn kỹ thuật chân bơi ếch cơ bản',
    thumbnail: 'https://tinyurl.com/thbn3',
    youtubeId: '-j3OZ1BA03Q',
    body: [
      {
        title: 'Khởi động (5 phút)',
        content: [
          'Tập xoay khớp gối, cổ chân và kéo giãn cơ đùi.',
          'Làm nóng các cơ như buổi trước.',
        ],
      },
      {
        title: 'Kỹ thuật chân cơ bản (20 phút)',
        content: [
          'Trên bờ: Tập co chân và xoay cổ chân ra ngoài. Thực hiện từ từ 10-15 lần cả hai bên và mỗi bên.',
          'Dưới nước (bám thành bể): Đứng bám thành, tập co chân – đạp chân thật từ từ. Thực hiện 10-15 lần.',
          'Sử dụng phao, tập đạp chân: Tập đạp chân trên phao, di chuyển quãng ngắn (5m). Lặp lại 3-5 lần.',
        ],
      },
      {
        title: 'Thực hành đạp chân (20 phút)',
        content: [
          'Kết hợp giữ thăng bằng, tập đạp chân nhịp nhàng khi tay cầm phao, mặt úp xuống nước, hai nhịp đạp chân ếch ngoi lên thở một lần (3 - 5 vòng bể).',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Động tác tay bơi ếch',
    description: 'Hướng dẫn kỹ thuật tay bơi ếch cơ bản',
    thumbnail: 'https://tinyurl.com/thbnf',
    youtubeId: '0PKSTacD4vs',
    body: [
      {
        title: 'Khởi động (5 phút)',
        content: ['Xoay vai, cổ tay, kéo giãn cơ ngực và lưng.'],
      },
      {
        title: 'Kỹ thuật tay cơ bản (20 phút)',
        content: [
          'Trên bờ: Hướng dẫn quạt tay theo hình vòng cung: Mở rộng sang hai bên, kéo nước về phía ngực, thu tay về trước. Mỗi lần quạt 5-7 giây, thực hiện 10 lần.',
          'Dưới nước: Đứng tại chỗ, tập động tác quạt tay chậm rãi, đúng nhịp. Lặp lại 10 - 15 lần để quen lực cản nước.',
        ],
      },
      {
        title: 'Kết hợp tay và nổi (20 phút)',
        content: [
          'Kẹp phao vào chân, thực hành quạt tay kết hợp giữ thăng bằng.',
          'Di chuyển quãng ngắn (5m) với tay và hỗ trợ phao.',
        ],
      },
    ],
  },

  {
    id: 5,
    title: 'Phối hợp tay, chân và thở',
    description: 'Hướng dẫn phối hợp toàn thân trong bơi ếch',
    thumbnail: 'https://trungtamdayboi.edu.vn/wp-content/uploads/2015/04/5_2.jpg',
    youtubeId: 'qjuHqmCGcjI',
    body: [
      {
        title: 'Khởi động (5 phút)',
        content: ['Tương tự các buổi trước, tập trung làm nóng toàn bộ cơ thể.'],
      },
      {
        title: 'Luyện phối hợp tay, chân và thở (35 phút)',
        content: [
          'Kết hợp tay cầm phao và đạp chân: 5 vòng bể, hai lần đạp chân ngoi lên thở một lần.',
          'Kết hợp chân kẹp phao và quạt tay: 5 vòng bể, hai lần quạt tay ngoi lên thở một lần.',
        ],
      },
      {
        title: 'Thực hành (5 phút)',
        content: [
          'Kết hợp bơi giữa tay và chân: 2 vòng bể, một lần quạt tay và hai lần đạp chân ngoi lên thở một lần.',
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Thực hành bơi quãng dài và sửa lỗi',
    description: 'Hướng dẫn thực hành bơi quãng dài và cải thiện kỹ thuật',
    thumbnail:
      'https://i0.wp.com/hello3s.com/wp-content/uploads/2019/08/Boi-sai-duong-truong.jpg?fit=1200%2C777&ssl=1',
    youtubeId: 'qtVFnRRJt7U',
    body: [
      {
        title: 'Khởi động (5 phút)',
        content: ['Nhấn mạnh kéo giãn cơ tay, chân và lưng để chuẩn bị bơi quãng dài.'],
      },
      {
        title: 'Bơi quãng dài (30 phút)',
        content: [
          'Kết hợp tay cầm phao và đạp chân: 3 vòng bể, hai lần đạp chân ngoi lên thở một lần.',
          'Kết hợp chân kẹp phao và quạt tay: 3 vòng bể, hai lần quạt tay ngoi lên thở một lần.',
        ],
      },
      {
        title: 'Rèn luyện sự phối hợp (10 phút)',
        content: [
          'Kết hợp giữa một lần quạt tay và một lần đạp chân rồi một nhịp thở: 1 - 2 vòng, tốc độ vừa phải, thở đều.',
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Hoàn thiện kỹ thuật và đánh giá bản thân',
    description: 'Tổng kết và đánh giá kỹ thuật bơi sau quá trình học',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoujfnKpiV5jPrvpMHT3ww6WJ2xBmQQbJj9Q&s',
    youtubeId: 'z2E1C9hWirY',
    body: [
      {
        title: 'Khởi động (5 phút)',
        content: ['Tập kéo giãn nhẹ nhàng để cơ thể sẵn sàng.'],
      },
      {
        title: 'Ôn tập kỹ thuật (15 phút)',
        content: [
          'Ôn lại động tác thở, tay, chân: Thực hiện từng động tác 5-10 lần.',
          'Kết hợp tay, chân và thở: Luyện tập đầy đủ kỹ thuật trong 5 phút.',
        ],
      },
      {
        title: 'Thực hành bơi hoàn chỉnh (25 phút)',
        content: ['Bơi liên tục trong khoảng 20 phút (5 vòng) với động tác ghép hoàn chỉnh.'],
      },
      {
        title: 'Tổng kết',
        content: [
          'Đánh giá kết quả: mức độ tự tin, sự hoàn thiện kỹ thuật, sự cải thiện về thể lực.',
        ],
      },
    ],
  },
]
