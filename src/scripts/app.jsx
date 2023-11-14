import { StateComponent } from 'amber';
import '../styles/index.sass';

const App = class extends StateComponent {
  constructor() {
    super();
    this.state = {
      countDownTime: '00:00:00',
      timeCountDownRegin: ''
    };
    this.timetarget = new Date('2023-12-04T00:00:00').getTime()
    this.countDownHandler = this.countDownHandler.bind(this)
  }

  countDownHandler() {
    const now = new Date().getTime()
    const timeRemaing = this.timetarget - now

    const [time, region] = new Date(timeRemaing).toTimeString().split(' ', 2)
    this.setState({ countDownTime: time, timeCountDownRegin: region })
  }

  render() {
    this.countDownHandler()
    setInterval(this.countDownHandler, 1000)
    return (
      <div className="app">
        <header>
          <nav className="fixed top-0 left-0 right-0 flex px-12 h-[70px] items-center gap-6 backdrop-blur-sm">
            <span className="text-2xl">Global Fashion Event</span>
            <a href="/" className="ml-auto">home</a>
            <a href="/">events</a>
            <a href="/">tickets</a>
          </nav>
          <div className="h-[calc(100vh-70px)] bg-slate-100 flex flex-col items-center text-center justify-center">
            <h1 className="text-5xl">Aniversary Global Fashions</h1>
          </div>
        </header>
        <main>
          <div className="flex flex-col items-center gap-3 p-12 text-center">
            <p className=" max-w-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam nam exercitationem labore aliquid cupiditate libero fuga, in voluptatum voluptatibus eum amet et officia nemo, eos earum. Iure doloribus necessitatibus mollitia fugiat exercitationem natus, unde nobis, officia voluptatem incidunt itaque.</p>
            <h3 className="text-2xl mt-[50px] text-red-600">Event time</h3>
            <h1 className="text-6xl font-semibold">{this.state.countDownTime}</h1>
            <span className="mb-[40px]">{this.state.timeCountDownRegin}</span>
          </div>
          <div className="bg-slate-50 flex flex-wrap gap-8 p-8">
            <article className="basis-[380px]">
              <img className="" src="" alt="" />
              <h2 className=" text-3xl">Judul post</h2>
              <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ipsam iusto dicta debitis, placeat nihil cumque odit ipsa non eius?</p>
            </article>
          </div>
        </main>
      </div >
    );
  }
};

export default App;
