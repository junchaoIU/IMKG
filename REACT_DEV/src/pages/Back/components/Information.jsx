import styles from '../index.less';
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {Timeline, Tabs, Tooltip, Divider, Row, Col, Image} from 'antd';
import {
  ClockCircleTwoTone,
  TagsOutlined,
  EnvironmentTwoTone,
  CloudTwoTone,
} from '@ant-design/icons';
import Information from '@/pages/Common/Information';
import LineDrawer from '@/pages/Common/LineDrawer';

@connect(({ knowledge, loading }) => ({
  knowledge,
  submitting: loading.effects['knowledge/knowledge'],
}))
class information extends PureComponent {
  state = {
    cardVisible: false,
    substance: [],
    loading: true,
  };

  onDispatch = (backWord) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'knowledge/getSubstance',
      payload: backWord,
      callback: (response) => {
        if (response !== null) {
          this.setState({
            substance: response,
            loading: false,
          });
        }
      },
    });
  };

  onBack = (search) => {
    this.setState({
      substance: [],
      loading: true,
    });
    this.onDispatch(search);
    this.setState({
      cardVisible: true,
    });
  };

  onCloseBack = () => {
    this.setState({
      cardVisible: false,
    });
  };

  timeLine = () => {
    const { cardVisible, loading, substance } = this.state;
    const {
      childEvent: { series },
    } = this.props;

    return (
      <Timeline className={styles.time} mode={'left'}>
        {series.map((item, index) => {
          return (
            <Timeline.Item key={index} dot={<TagsOutlined style={{ fontSize: '18px' }} />}>
              <p className={styles.text}>
                <ClockCircleTwoTone twoToneColor="#52c41a" className={styles.icon} />
                {item[0][0]}
              </p>
              <p className={styles.text}>
                <EnvironmentTwoTone twoToneColor="#eb2f96" className={styles.icon} />
                {item[0][1]}
              </p>
              <Tooltip
                color={'#2db7f5'}
                placement="topLeft"
                title="点击事件语料关联"
                arrowPointAtCenter
              >
                <p
                  className={styles.detail}
                  // onClick={() => this.onBack(`${item[0][0]}${item[0][1]}${item[0][4]}`)}
                >
                  <CloudTwoTone twoToneColor="#87e8de" className={styles.icon} />
                  {item[0][2]}
                </p>
              </Tooltip>
            </Timeline.Item>
          );
        })}
        <LineDrawer
          onCloseBack={this.onCloseBack}
          cardVisible={cardVisible}
          loading={loading}
          substance={substance}
          style={{ position: 'absolute', transform: 'none' }}
        />
      </Timeline>
    );
  };

  render() {
    const { propSearch, detailData, chartsData } = this.props;
    return (
      <div className={styles.cardContainer}>
        <Tabs type="card" className={styles.outCard}>
          <Tabs.TabPane tab="时空线" key="1">
            {this.timeLine()}
          </Tabs.TabPane>
          <Tabs.TabPane tab={"实例信息"} key={"2"}>
            <Tabs className={styles.outCard}>
              <Tabs.TabPane tab="简介" key="3">
                {/*<Information propSearch={propSearch} detailData={detailData} chartsData={chartsData} />*/}
                <h2>化度寺邕禅师舍利塔铭</h2>
                <Divider />
                <Row >
                  <Col span={7}>
                    <Image
                      width={120}
                      src="https://img.library.sh.cn/hisdata/bt/cover/qmgaq10ageurr2lm.jpg"
                    />
                  </Col>
                  <Col span={16} style={{fontSize:12,margin:5}}>
                    <Row>
                      <Col span={5}>首&ensp;&ensp;&ensp;&ensp;题:</Col><Col span={19}>化度寺邕禅师舍利塔铭</Col>
                      <Col span={5}>责&ensp;任&ensp;者:</Col><Col span={19}>李百药（撰文），欧阳询（楷书）</Col>
                      <Col span={5}>书&ensp;&ensp;&ensp;&ensp;体:</Col><Col span={19}>楷书</Col>
                      <Col span={5}>版&ensp;&ensp;&ensp;&ensp;本:</Col><Col span={19}>唐原石北宋拓本</Col>
                      <Col span={5}>数&ensp;&ensp;&ensp;&ensp;量:</Col><Col span={19}>27开</Col>
                      <Col span={5}>尺&ensp;&ensp;&ensp;&ensp;寸:</Col><Col span={19}>册高32.9厘米，宽20厘米。碑文九开半，帖芯高24.1厘米，宽14.8 厘米。</Col>
                      <Col span={5}>刻立年代:</Col><Col span={19}>唐贞观五年（31）</Col>
                      <Col span={5}>馆&ensp;藏&ensp;地:</Col><Col span={19}>上海图书馆</Col>
                      <Col span={5}>来源书目:</Col><Col span={19}>翰墨上海图书馆藏珍碑帖丛刊（特辑） 2012年12月</Col>
                    </Row>
                  </Col>
                </Row>
              </Tabs.TabPane>
              <Tabs.TabPane tab="背景故事" key="6">
                <div style={{margin:8,height:420,overflow:'auto'}}>（吴湖帆藏本）
                  唐贞观五年（631）刻立，李百药撰文，欧阳询楷书。三十五行，行三十三字。宋庆历初（1041－）以前，原石已经断裂，时任河南制府的范雍（981—1046）见到的《化度寺》已是砌石，庆历间（1041－1048），《化度寺》断石又被寺僧求宝击碎，又三断，后残石移置范雍洛阳赐书阁，至北宋末年佚失。
                  此碑在宋代有不少翻刻本流传，传至今日著名的翻刻本有六种：吴县陆恭松下清斋藏本、临川李宗瀚静娱室藏本、南海吴荣光筠清馆藏本、大兴翁方纲苏斋藏本、南海伍崇曜粤雅堂藏本、敦煌石室本。前五种为宋代翻刻，敦煌本乃唐代翻刻本，传世唯有吴湖帆四欧堂藏本是原石宋拓本。
                  此册为吴湖帆藏“唐原石北宋拓本”，传世孤本，列“四欧宝笈”之首。上海图书馆馆藏国家一级文物，堪称“镇馆之宝”。凡九百三十字。明初为王偁（孟扬）所藏，清代经陈崇本（伯恭）、成亲王（皇十一子永瑆、诒晋斋）、荣郡王（皇三孙绵亿、南韵斋）、奕绘（荣郡王之子、观古斋）、沈树镛（郑斋）、潘祖荫（滂喜斋）等人递藏，民国间转归吴湖帆四欧堂。此册旧称“王孟阳本”，今称“四欧堂本”。
                  （注：吴湖帆“四欧宝笈” 特指唐代书法家欧阳询所书四件著名碑帖，即：《化度寺塔铭》、《九成宫醴泉铭》、《皇甫诞碑》、《虞恭公碑》，皆为欧体楷书的代表作，在中国书法史上影响深远，又因以上四件拓本均系宋拓，实属珍稀，故称“宝笈”。其中宋拓《化度寺》、《虞恭公》、《皇甫诞》曾为清代潘祖荫收藏，民国间潘祖荫的侄女潘静淑嫁吴湖帆时，此三册曾是陪嫁物之一。1924年吴湖帆又觅得宋拓《九成宫》（原为乾隆皇帝懋勤殿藏本），1926年遂将四册合装同贮一匣，始名曰“四欧宝笈”，并颜斋号为 “四欧堂”。20世纪50年代后期，《四欧宝笈》以二万圆转售上海图书馆。）

                  此册在乾隆五十五年（1790）翁方纲曾误定为“宋翻刻本”。民国初罗振玉又将此册与敦煌藏经洞发现的《化度寺》（敦煌本极具权威性，北宋前拓本无疑，过去一直被视为唐刻原石）视为“同出一石”，歪打正着地认定“四欧堂本”为“原石宋拓”。当代王壮弘先生考订此册为“唐拓原石本”，而将敦煌本更定为“唐拓翻刻本”。由于目前四欧堂本属唐拓、北宋拓尚无定论，故暂且保守地定为“原石北宋拓本”。

                  古锦面板上有民国十五年（1926）五月吴湖帆题签。
                  首叶有题签四条，自右而左依次是：成亲王、沈树镛（同治四年1865十二月题）、赵之谦（同治六年1867八月题）、王同愈（民国十四年1925九月题）。

                  二叶有王同愈（栩缘）篆书题端：“海内第一唐石真本宋拓化度寺碑。”

                  三叶有民国十五年（1926）吴湖帆绘《勘碑图》并题：“吾家《化度寺碑》王孟扬本，翁覃溪先生题为‘宋翻宋拓本’，余曾以敦煌唐拓残字复印件校之，剥蚀悉合，纤毫无失，可证翁氏之伪。丙寅上虞罗叔言丈南旋顾余四欧堂，勘赏竟日，叹为海内第一宋拓唐石真本，因作《勘碑图》于册端，志石墨盛事也。”
                  （按：其实“四欧堂本”与“敦煌本”并非出自同一石，吴湖帆“纤毫无失”实为误判。两本第一行第一字“化”字即明显不同，“化”字“匕”部撇划，“四欧堂本”窜出钩笔，“敦煌本”不窜出，可参见民国早期四欧堂石印本。“四欧堂本”“化”字窜出之笔旋被妄人涂描，欲饰为“敦煌本”，伪造与敦煌本“纤毫无失”的假像。历代碑帖涂描均是伪品照真品样式涂改，此乃真品参照伪品样式涂改，可算孤例。）

                  四叶有民国十六年（1927）吴湖帆蝇头小楷所作《化度寺碑式图》。
                  五叶有民国二十年（1931）九月叶恭绰题记：“光绪三十四年（1908）伯希和携唐拓残本过北京，余曾获观，今见此本，益足互相证明四欧堂中物信足俯视一切矣。”
                  (注：伯希和Paul Pelliot法国汉学家，最早发现《化度寺》“敦煌本”起首二页凡三十九字。叶恭绰亦以“敦煌本”与“四欧堂本”同出一石作为论据。又，叶氏题记未书年月，笔者另见四欧堂《皇甫诞碑》后有叶恭绰观款纪年——民国二十年九月二十二日，据此推定叶氏同日得见四欧秘籍四册）。

                  册尾有乾隆五十五年（1790）正月十二日翁方纲题跋：“范忠献家原石已是断而又断之本，曾未几时遂至坏不可拓，则宋时所拓必无近千字之原石本可知也。……今日见此本乃有九百卅字之多，则其为宋刻宋拓复何疑乎。”
                  （按：由于经翁方纲过眼的六种宋拓中，陆恭松下清斋藏本仅存二百余字，李宗瀚静娱室藏本才四百余字，吴荣光筠清馆藏本六百余字，苏斋自藏本不足五百字，南海伍崇曜粤雅堂藏本亦仅六百余字。翁氏就此推断范氏洛阳赐书阁原石已是断而又断之本，宋时所拓必无近千字之原石本。由于形成这一成见，所以当翁氏见到王孟扬本（即后来称为“四欧堂本”者），以存字多达九百卅字，且面目迥异于其他五本，就认定王孟阳本为“宋时初翻之本”。）

                  翁跋又云：“其所从出之本则又在未归范氏以前之所拓也。……又谛审帖内于阙文处皆用空纸隔之，是其装潢时必见原拓全幅而为之者，则不特此本之所从出为唐拓旧本，而此册装裱亦出于百数十年前可知也。”
                  （按：翁氏认为四欧堂本在翻刻时一定参照过原拓整幅，而且四欧堂本之所从出底本还可能是唐拓旧本，真是差一点就要发现真相。当然翁氏的考定失误有其历史的局限，如果他能见到清末民初新发现的敦煌本，必定亦会惑解疑析。）

                  嘉庆八年（1803）七月六日成亲王（永瑆）以百金从陈崇本（伯恭）处易得此册“王孟扬本”。嘉庆十三年（1808）成亲王以“范氏书楼初拓原石本”校补六十八字，录于册中各页上端。嘉庆十四年（1809）十一月，永瑆又以白银四百两购入《化度寺》吴荣光“筠清馆藏本”（实为宋翻宋拓本），因听信金石大家翁方纲的鉴定，视“筠清馆本”为原石宋拓本，而将其旧藏此册“王孟扬本”认作宋代翻刻本，于嘉庆十七年（1812）转赠给其侄荣郡王绵亿（南韵斋）。册中存有成亲王当年题跋三则，另有嘉庆十七年（1812）荣郡王绵亿题跋一则。

                  民国十五年（1926）罗振玉通过赵叔孺引介得识吴湖帆，得见《化度寺》四欧堂本，这年五月九日，罗氏在题四欧堂本跋中云：“《邕禅师塔铭》三十年来所见凡五本，皆经昔贤定为‘唐石宋拓’者，顾书势皆囫沦，与信本它碑劲健畅发者不同，心以为异。及宣统初元见敦煌石室唐拓残本笔势全与《虞公碑》同，始知世传为‘范氏书楼原石本’实非唐石之旧，得解往昔之疑。”
                  （按：罗氏见到《化度寺》敦煌本后，发现敦煌本与翁氏所定唐原石宋拓真本迥异，它们绝非出自同一碑石，加之敦煌本是宋代以前拓本，可信度极高，故罗振玉轻而易举地将翁方纲的《化度寺》版本考定推翻，指出经翁方纲鉴定为唐原石宋拓真本的五个本子均为翻刻。）

                  罗氏题跋又云：“湖帆先生出潘文勤公旧藏此本见示，甫一展观，神采焕发，精光射十步外，不必一一与敦煌本校量，已可确之为唐石宋拓，且存字多至九百余，为之惊喜欲狂，而册后有翁阁学跋，因与它本不同，反以此为宋人复本，以蔽于所习，致使颠倒若斯。然使予不意见敦煌本，亦无由解转畴昔之疑，更何能证阁学之惑，是吾人眼福突过古人……。”（插图6）
                  (按：罗氏对《化度寺》版本研究的结论是：敦煌本与四欧堂本同出一石，敦煌本为唐拓残本，四欧堂本为唐石宋拓之足本。罗振玉利用敦煌本这一新数据来推翻翁氏“五种宋拓原石论”，不能不说存在着偶然与侥幸因素。此外，罗振玉为《化度寺》四欧堂本翻案，更是瞎猫遇见死耗子，同时亦暴露了罗振玉在碑帖鉴定中的一处失误，那就是罗氏将敦煌本与四欧堂本视为同出一石，其实这两本风马牛不相及，应该也是两个不同本子。另据陈巨来《安持精舍人物琐忆》在回忆吴湖帆章节中，记有罗振玉这次为吴湖帆四欧堂本题跋，得润笔费两百大洋的情节。)
                  民国十五年（1926）此册又添王同愈、吴湖帆、潘静淑题跋。（插图7）
                  民国十八年（1929）九月吴湖帆在册尾装入“敦煌残本”影印件。民国十八年（1929）十月又添陈承修题跋一则。（插图8）

                  民国二十四年（1935）春故宫博物院准备文物参加伦敦国际艺术展览会，特邀法国人伯希和来华检阅故宫文物，同年四月三日吴湖帆与叶恭绰假张葱玉处会见伯希和，伯希和得见此册并留下题跋，陆翔（云伯）作译文。（插图9）
                  民国三十八年（1949）四月三日沈尹默为此册留下最后一则题跋。

                  另有观款如下：
                  光绪九年（1883）八月李鸿裔
                  民国十五年（1926）六月冯超然
                  民国十六年（1927）夏五高时显
                  民国十七（1928）年正月朱孝臧
                  民国十七（1928）年四月吴梅
                  民国十八年（1929）六月吴曾源、张茂炯、吴兴让、蔡晋镛
                  民国十八年（1929）七月二十七日邓邦述
                  民国十八年（1929）十月方还
                  民国十八年（1929）冬日蒋祖诒
                  民国十九年（1930）七月二十二日陈曾寿
                  1953年上元抱真、錬霞

                  此外，还钤有 “翠井山房”、 王澍、英和、杨绍和等印章。
                  共二十七开，册高32.9厘米，宽20厘米。碑文九开半，帖芯高24.1厘米，宽14.8 厘米 。
                  馆藏号 19A375</div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="流传经历" key="4" className={styles.book}>
                <div style={{margin:8}}>明初为王偁（孟扬）所藏，清代经陈崇本（伯恭）、成亲王（皇十一子永瑆、诒晋斋）、荣郡王（皇三孙绵亿、南韵斋）、奕绘（荣郡王之子、观古斋）、沈树镛（郑斋）、潘祖荫（滂喜斋）等人递藏，民国间转归吴湖帆四欧堂</div>
                {/*<BookCard colSpan={24} loading={loading} substance={substance} show={true} />*/}
              </Tabs.TabPane>
              <Tabs.TabPane tab="题记" key="5" className={styles.book}>
                <div style={{margin:8}}>三叶有民国十五年（1926）吴湖帆绘《勘碑图》并题。五叶有民国二十年（1931）九月叶恭绰题记。册尾有乾隆五十五年（1790）正月十二日翁方纲题跋。册中有罗振玉、王同愈、吴湖帆、潘静淑等题跋。</div>
                {/*<BookCard colSpan={24} loading={loading} substance={substance} show={true} />*/}
              </Tabs.TabPane>
            </Tabs>
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default information;
