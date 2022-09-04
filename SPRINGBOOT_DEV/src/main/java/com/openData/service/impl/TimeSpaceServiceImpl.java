package com.openData.service.impl;

import com.openData.dao.entity.EchartsData;
import com.openData.dao.entity.EchartsLink;
import com.openData.dao.entity.EchartsNode;
import com.openData.service.TimeSpaceService;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TimeSpaceServiceImpl implements TimeSpaceService {

    String[][] timespacelist = new String[][]{{"六年（632）", "四欧堂本", "(吴湖帆四欧堂本) 唐贞观六年（632）四月", "九成宫醴泉铭", "0632"}, {"隋开皇十三年（593）", "九成宫、麟游县、天台山、陕西", "九成宫卽隋仁寿宫，宫在陕西麟游县西五里之天台山，隋开皇十三年（593）杨素所治", "九成宫醴泉铭", "0593"}, {"义宁元年（617）", "九成宫、武库官寺、万年宫", "隋之仁寿宫，义宁元年（617）废，贞观五年（631）复置，改仁寿宫为九成宫，周垣一千八百步，并置禁苑及武库官寺等，永徽中又改为万年宫", "九成宫醴泉铭", "0617"}, {"民国十三年（1924）", "未知", "民国十三年（1924）吴湖帆来沪后，以商戈周彝易归，列“四欧秘籍”之一", "九成宫醴泉铭", "1924"}, {"民国十五年（1926）", "未知", "古锦面板上有民国十五年（1926）吴湖帆题签", "九成宫醴泉铭", "1926"}, {"万历四十一年（1613）", "未知", "册后有万历四十一年（1613）薛明益（虞卿）题跋：“岁久石剜，当时善本俱属好事者什袭，以故偶有流落，珍逾珠璧，精选卒难遘遇", "九成宫醴泉铭", "1613"}, {"民国十八年（1929）", "未知", "册后还有民国十七年（1928）陈承修题跋、民国十八年（1929）方还题跋、民国三十八年（1949）三月沈尹默题跋", "九成宫醴泉铭", "1929"}, {"民国十五年（1926）", "未知", ")册后另有观款如下：民国十五年（1926）五月罗振玉民国十五年（1926）六月冯超然民国十五年（1926）九月褚德彝、高时显民国十七年（1928）正月朱孝臧民国十七年（1928）四月吴梅民国十八年（1929）六月吴曾源、吴兴让、蔡晋镛、张茂炯同观民国十八年（1929）七月邓邦述民国十九年（1930）八月陈曾寿叶恭绰未题年月（按：四欧堂《皇甫诞碑》后有叶恭绰观款纪年——民国二十年九月二十二日，笔者推判叶氏同日得见四欧秘籍四册）", "九成宫醴泉铭", "1926"}, {"广德二年（764）", "未知", "（李国松藏本）此帖为唐广德二年（764）十一月颜真卿致定襄王郭英乂函稿，又名《与郭英乂书》", "争座位帖", "0764"}, {"唐贞观五年（631）", "吴湖帆", "（吴湖帆藏本）唐贞观五年（631）刻立，李百药撰文，欧阳询楷书", "化度寺邕禅师舍利塔铭", "0631"}, {"乾隆五十五年（1790）", "未知", "）此册在乾隆五十五年（1790）翁方纲曾误定为“宋翻刻本”", "化度寺邕禅师舍利塔铭", "1790"}, {"民国十五年（1926）", "吴湖帆", "古锦面板上有民国十五年（1926）五月吴湖帆题签", "化度寺邕禅师舍利塔铭", "1926"}, {"民国十五年（1926）", "敦煌、吴湖帆", "”三叶有民国十五年（1926）吴湖帆绘《勘碑图》并题：“吾家《化度寺碑》王孟扬本，翁覃溪先生题为‘宋翻宋拓本’，余曾以敦煌唐拓残字复印件校之，剥蚀悉合，纤毫无失，可证翁氏之伪", "化度寺邕禅师舍利塔铭", "1926"}, {"民国十六年（1927）", "吴湖帆", "）四叶有民国十六年（1927）吴湖帆蝇头小楷所作《化度寺碑式图》", "化度寺邕禅师舍利塔铭", "1927"}, {"民国二十年（1931）", "北京", "五叶有民国二十年（1931）九月叶恭绰题记：“光绪三十四年（1908）伯希和携唐拓残本过北京，余曾获观，今见此本，益足互相证明四欧堂中物信足俯视一切矣", "化度寺邕禅师舍利塔铭", "1931"}, {"乾隆五十五年（1790）", "未知", "册尾有乾隆五十五年（1790）正月十二日翁方纲题跋：“范忠献家原石已是断而又断之本，曾未几时遂至坏不可拓，则宋时所拓必无近千字之原石本可知也", "化度寺邕禅师舍利塔铭", "1790"}, {"八年（1803）", "未知", "）嘉庆八年（1803）七月六日成亲王（永瑆）以百金从陈崇本（伯恭）处易得此册“王孟扬本”", "化度寺邕禅师舍利塔铭", "1803"}, {"嘉庆十三年（1808）", "未知", "嘉庆十三年（1808）成亲王以“范氏书楼初拓原石本”校补六十八字，录于册中各页上端", "化度寺邕禅师舍利塔铭", "1808"}, {"嘉庆十七年（1812）", "南韵斋、筠清馆、荣郡", "嘉庆十四年（1809）十一月，永瑆又以白银四百两购入《化度寺》吴荣光“筠清馆藏本”（实为宋翻宋拓本），因听信金石大家翁方纲的鉴定，视“筠清馆本”为原石宋拓本，而将其旧藏此册“王孟扬本”认作宋代翻刻本，于嘉庆十七年（1812）转赠给其侄荣郡王绵亿（南韵斋）", "化度寺邕禅师舍利塔铭", "1812"}, {"嘉庆十七年（1812）", "荣郡", "册中存有成亲王当年题跋三则，另有嘉庆十七年（1812）荣郡王绵亿题跋一则", "化度寺邕禅师舍利塔铭", "1812"}, {"民国十五年（1926）", "四欧堂本、吴湖帆", "民国十五年（1926）罗振玉通过赵叔孺引介得识吴湖帆，得见《化度寺》四欧堂本，这年五月九日，罗氏在题四欧堂本跋中云：“《邕禅师塔铭》三十年来所见凡五本，皆经昔贤定为‘唐石宋拓’者，顾书势皆囫沦，与信本它碑劲健畅发者不同，心以为异", "化度寺邕禅师舍利塔铭", "1926"}, {"民国十五年（1926）", "吴湖帆", ")民国十五年（1926）此册又添王同愈、吴湖帆、潘静淑题跋", "化度寺邕禅师舍利塔铭", "1926"}, {"民国十八年（1929）", "敦煌、吴湖帆", "（插图7）民国十八年（1929）九月吴湖帆在册尾装入“敦煌残本”影印件", "化度寺邕禅师舍利塔铭", "1929"}, {"民国十八年（1929）", "未知", "民国十八年（1929）十月又添陈承修题跋一则", "化度寺邕禅师舍利塔铭", "1929"}, {"民国二十四年（1935）", "伦敦、法国、故宫、吴湖帆", "（插图8）民国二十四年（1935）春故宫博物院准备文物参加伦敦国际艺术展览会，特邀法国人伯希和来华检阅故宫文物，同年四月三日吴湖帆与叶恭绰假张葱玉处会见伯希和，伯希和得见此册并留下题跋，陆翔（云伯）作译文", "化度寺邕禅师舍利塔铭", "1935"}, {"民国三十八年（1949）", "未知", "（插图9）民国三十八年（1949）四月三日沈尹默为此册留下最后一则题跋", "化度寺邕禅师舍利塔铭", "1949"}, {"民国十五年（1926）", "翠井", "另有观款如下：光绪九年（1883）八月李鸿裔民国十五年（1926）六月冯超然民国十六年（1927）夏五高时显民国十七（1928）年正月朱孝臧民国十七（1928）年四月吴梅民国十八年（1929）六月吴曾源、张茂炯、吴兴让、蔡晋镛民国十八年（1929）七月二十七日邓邦述民国十八年（1929）十月方还民国十八年（1929）冬日蒋祖诒民国十九年（1930）七月二十二日陈曾寿1953年上元抱真、錬霞此外，还钤有 “翠井山房”、 王澍、英和、杨绍和等印章", "化度寺邕禅师舍利塔铭", "1926"}, {"唐大历七年（772）", "未知", "（朱秉衡藏本）《玄靖先生李含光碑》，唐大历七年（772）八月十四日刻，柳识撰，张从申书，李阳冰篆额", "张从申书李玄靖碑", "0772"}, {"明嘉靖三年（1524）", "句容玉晨观、江苏", "碑石原在江苏句容玉晨观，明嘉靖三年（1524）毁于火", "张从申书李玄靖碑", "1524"}, {"三年（1798）", "未知", "”册前有嘉庆三年（1798）翁方纲为铁保（冶亭）题跋", "晋唐小楷九种", "1798"}, {"三年（1798）", "秘阁、墨池", "后有嘉庆三年（1798）十一月翁方纲题跋：“此即欧阳公所云‘海字本’也……此《乐毅论》实文氏《停云》帖所祖，然《停云》与《墨池》同出秘阁，而仲玉始备传，予于此重有感也", "晋唐小楷九种", "1798"}, {"天佑元年（904）", "未知", "柳公权跋刻后未见有天佑元年（904）五月六日柳璨题刻", "晋唐小楷九种", "0904"}, {"三年（1798）", "洛神", "后有嘉庆三年（1798）十一月翁方纲题跋：“此《洛神十三行》尚在杭本之上", "晋唐小楷九种", "1798"}, {"三年（1798）", "未知", "后有嘉庆三年（1798）十一月翁方纲两跋", "晋唐小楷九种", "1798"}, {"嘉庆二年（1797）", "停云馆、秘阁、越州", "（插图19、20）其中嘉庆二年（1797）九月翁方纲题跋：“右集帖九种，盖合《秘阁续帖》与‘越州石氏帖’而成之者，文氏停云馆所摹诸帖多祖于此", "晋唐小楷九种", "1797"}, {"唐显庆三年（658）", "未知", "（缪曰芑藏本）唐显庆三年（658）十月十二日", "王居士砖塔铭", "0658"}, {"民国二十六年（1937）", "博山", "经陆恭（谨庭）、缪曰芑（武子）、彭翰孙（南屏）递藏，民国二十六年（1937）吴湖帆从碑估黄慰萱手中购得，旋归潘承厚（博山）", "王居士砖塔铭", "1937"}, {"咸丰十一年（1861）", "未知", "）册中另有咸丰十一年（1861）六月吴云（平斋）边题（为彭翰孙题），吴氏题云：“‘仰十地而翘勤’之‘翘’字覆刻本皆作‘克’字，殊谬", "王居士砖塔铭", "1861"}, {"民国二十八年（1939）", "未知", "）碑文末叶有民国二十八年（1939）三月吴湖帆边题：“吾乡先贤缪文子（曰藻）、武子（曰芑）两太史所藏未断《砖塔铭》各一本，皆经余目，可谓奇缘", "王居士砖塔铭", "1939"}, {"嘉庆六年（1801）", "未知", "”册尾另有嘉庆六年（1801）二月翁方纲题跋", "王居士砖塔铭", "1801"}, {"民国二十八年（1939）", "未知", "另有民国二十八年（1939）三月八日褚德彝、秦清曾、陈蝶野、吴湖帆观款（为潘承厚题）", "王居士砖塔铭", "1939"}, {"贞观十七年（643）", "四欧堂本", "（吴湖帆四欧堂本）贞观十七年（643），于志宁撰文，欧阳询楷书", "皇甫诞碑", "0643"}, {"宋皇佑三年（1051）", "未知", "宋皇佑三年（1051），原碑阴面改刻《复唯识院记》，碑侧原有花边亦已改刻题名", "皇甫诞碑", "1051"}, {"万历二十四年（1596）", "未知", "明万历十六年（1588），余君房督学建亭护碑，万历二十四年（1596）碑亭圮毁，碑沿原有极细裂纹中断为二", "皇甫诞碑", "1596"}, {"民国十五年（1926）", "未知", "原碑文中每行文字漫漶处均裁去，民国十五年（1926）吴湖帆另用“三监本”补入所缺之漫漶文字并重新装裱", "皇甫诞碑", "1926"}, {"民国十五年（1926）", "未知", "古锦面板上有民国十五年（1926）六月吴湖帆题签", "皇甫诞碑", "1926"}, {"民国十四年（1925）", "未知", "首页有民国十四年（1925）九月王同愈（栩缘）等人题签", "皇甫诞碑", "1925"}, {"民国十八年（1929）", "未知", "”二叶有民国十八年（1929）九月吴郁生（钝叟）署端", "皇甫诞碑", "1929"}, {"民国十八年（1929）", "未知", "三叶有民国十八年（1929）九月吴湖帆绘《四欧堂校碑图》", "皇甫诞碑", "1929"}, {"道光八年（1828）", "未知", "”碑文末叶有道光八年（1828）张岳崧（子骏、澥山）题识两行", "皇甫诞碑", "1828"}, {"民国十五年（1926）", "未知", "册尾有民国十五年（1926）五月罗振玉题跋，此跋列举了《皇甫诞碑》刊刻于贞观十七年的文献依据", "皇甫诞碑", "1926"}, {"民国十五年（1926）", "未知", "册后另有观款如下：光绪九年(1883)年李鸿裔民国十五年（1926）四月冯超然民国十五年（1926）九月褚德彝、高时显民国十七年（1928）正月朱孝臧民国十七年（1928）四月吴梅民国十八年（1929）六月张茂炯、蔡晋镛、吴曾源、吴兴让同观（吴兴让题）", "皇甫诞碑", "1926"}, {"民国三十八年（1949）", "未知", "民国十八年（1929）十月陈承修、方还民国十九年（1930）八月陈曾寿民国二十年（1931）九月叶恭绰民国三十八年（1949）正月李浩生、朱豫卿、沈迈士、沈尹默同观（沈尹默题）1952年冬马公愚另有潘眉安、杨绍和、张钟彦（琴宣）、朱善旗钤印", "皇甫诞碑", "1949"}, {"宋崇宁四年（1105）", "未知", "（潘承厚藏本）《章吉老墓志》宋崇宁四年（1105）九月初一刻，周绅撰，米芾行书（时年五十五岁），陈敦复篆盖", "章吉老墓志", "1105"}, {"民国二十年（1931）", "未知", "红木面板有褚德彝民国二十年（1931）三月题签", "章吉老墓志", "1931"}, {"民国二十年（1931）", "未知", "另有罗振玉篆书为潘承厚题端，民国二十年（1931）六月吴湖帆绘《米家山水图》并诗跋（为潘承厚题），据题跋可知，昔年潘祖荫有《章吉老墓志》，视为孤本，后赠内侄汪鹤舲", "章吉老墓志", "1931"}, {"同治六年（1867）", "未知", "另有同治六年（1867）三月唐翰题（鹪安）题跋，王同愈（栩缘）民国二十年（1931）七月观款", "章吉老墓志", "1867"}, {"同治六年（1867）", "未知", "据唐翰题题跋可知，此册同治六年（1867）与《章吉老墓表》（大观二年1108刻，米芾大字行书）原合装一册，今本仅存《墓志》不见《墓表》", "章吉老墓志", "1867"}, {"清光绪八年（1882）", "穰梨馆", "清光绪八年（1882）陆心源、胡镢将此册作为底本刻入《穰梨馆历代名人法书》第三卷中时，连同册中杨泾（鉅济）钤印一并刻入，还将第九开左半与第十开右半对调，第十开左半与第十一开右半对调，使文序理顺", "章吉老墓志", "1882"}, {"贞观十一年（637）", "四欧堂本", "（吴湖帆四欧堂本）唐贞观十一年（637）十月立", "虞恭公温彦博碑", "0637"}, {"民国十六年（1927）", "未知", "三叶有民国十六年（1927）吴湖帆绘《四欧堂读碑图》(此年吴湖帆开始使用“四欧堂”斋名) 碑文末尾有吴湖帆、潘静淑泥金题记", "虞恭公温彦博碑", "1927"}, {"八年（1828）", "未知", "”道光八年（1828）江凤彝题跋：“（此碑）今已漫漶，可识者仅存三百余字", "虞恭公温彦博碑", "1828"}, {"道光二十九年（1849）", "海南", "）道光二十九年（1849）朱昌颐为费开绶题跋：“《虞恭公碑》以余藏本为无上妙品，今夏见海南潘氏本与此本，毡蜡皆稍逊余藏本，然神采奕奕，近时已不多得，佩青前辈其珍袭之", "虞恭公温彦博碑", "1849"}, {"道光二十九年（1849）", "海南、化度寺、广东、北京", "”（按：朱昌颐所藏“无上妙品”笔者无缘得见，然海南潘氏本（广东潘正纬藏本）在2009年北京歌德春季拍卖中出现，与《化度寺》合装一册，册首有道光二十九年（1849）朱昌颐题端，另有专文评价，兹不赘言", "虞恭公温彦博碑", "1849"}, {"民国十八年（1929）", "未知", "）嘉庆七年（1802）梁同书光绪九年(1883)李鸿裔民国十五年（1926）五月罗振玉民国十五年（1926）六月冯超然民国十五年（1926）九月褚德彝、高时显民国十七年（1928）正月朱孝臧民国十七年（1928）四月吴梅民国十八年（1929）六月吴曾源、吴兴让、蔡晋镛、张茂炯同观", "虞恭公温彦博碑", "1929"}, {"民国十八年（1929）", "未知", "民国十八年（1929）七月邓邦述民国十八年（1929）十月陈承修、方还民国十九年（1930）八月陈曾寿民国三十八年（1949）正月李浩生、朱豫卿、沈迈士、沈尹默同观", "虞恭公温彦博碑", "1929"}, {"光绪二十八年（1902）", "未知", "碑额为光绪二十八年（1902）王存善以明拓配补", "道因法师碑", "1902"}, {"民国五年（1916）", "未知", "”首页有民国五年（1916）正月王存善题记：“此拓本除三十三行‘羲’字下泐两字半外，余无一字泐者，不特《随笔》所举之数字，其为北宋拓本无疑", "道因法师碑", "1916"}, {"民国五年（1916）", "未知", "”（插图5）（按：王存善卒于民国五年（1916），此跋堪称绝笔", "道因法师碑", "1916"}, {"乾隆三年（1738）", "未知", "）册尾有乾隆三年（1738）四月潘宁题跋，论及大小欧阳书体流变", "道因法师碑", "1738"}, {"光绪二十八年（1902）", "未知", "）册尾另附光绪二十八年（1902）三月王存善“道因碑校勘表”并跋（与翁方纲题跋之吴荣光藏元明间拓本校勘）", "道因法师碑", "1902"}, {"咸亨三年（672）", "未知", "（张应召藏本）咸亨三年（672）十二月八日", "集王羲之书三藏圣教序", "0672"}, {"嘉庆十九年（1814）", "未知", "碑文首尾均有嘉庆十九年（1814）四月翁方纲边题，翁氏提及张应召之闲章 “公孙大娘舞剑”为明朝人不知考订，应更定为“公孙大娘舞剑器”，“剑器”乃所舞曲名", "集王羲之书三藏圣教序", "1814"}, {"嘉庆二十年（1815）", "未知", "此册首页有嘉庆二十年（1815）中伏伊秉绶为汪喜孙题跋，伊氏卒于是年，此跋堪称绝笔", "集王羲之书三藏圣教序", "1815"}, {"嘉庆二十五年（1820）", "未知", "” （按：此册卷尾另有嘉庆二十五年（1820）郭尚先题跋，谈及此本与伊秉绶藏本的异同", "集王羲之书三藏圣教序", "1820"}, {"崇祯十一年（1638）", "未知", "）册尾有崇祯十一年（1638）李守（中庵）题跋：“用之（张应召）出《圣教序》视余鉴定，一装册，一尚全碑，碑圭形丰下刹上，余夙闻之，字画细润寔前拓数十年，而装者之拓手特精，遂相伯仲，其精神纸墨微独旧蓄，凡目所覩悉无其敌，真可宝也", "集王羲之书三藏圣教序", "1638"}, {"嘉庆十九年（1814）", "苏斋", "）嘉庆十九年（1814）四月四日汪喜孙（孟慈）持此册来苏斋请翁方纲题跋，同观者尚有叶志诜，叶氏题云：“是日并借对江秋史先生（江德量）昔藏许文穆公家本，拓手墨色洵称双美", "集王羲之书三藏圣教序", "1814"}, {"嘉庆二十五年（1820）", "三神山、舍卫城", "” 嘉庆二十五年（1820）又添郭尚先题跋，郭氏题云：“观此拓如泛舟大瀛海中望见三神山，金碧楼台，云霞缅邈，令人色动神耸，又如到舍卫城中闻薄伽梵说法，无可举似，但梵音清雅令人乐闻", "集王羲之书三藏圣教序", "1820"}, {"大暦六年（771）", "麻姑山", "（龚心铭藏本）《麻姑山仙坛记》，唐大暦六年（771）四月刻", "麻姑山仙坛记", "0771"}, {"同治三年（1864）", "麻姑山", "古锦面板上有沈树镛题签：“麻姑山仙坛记 宋拓大字本”册中有赵之谦同治三年（1864）十二月、同治四年（1865）四月内签两条", "麻姑山仙坛记", "1864"}, {"同治三年（1864）", "未知", "卷尾另有赵之谦同治三年（1864）十二月题跋，赵跋大意为宋后各朝世人多不知有《大字麻姑》，后黄骧云将何绍基藏本翻刻模出，世人乃知有《大字麻姑》", "麻姑山仙坛记", "1864"}, {"同治元年（1862）", "温州", "并猜测沈树镛此册可能就是同治元年（1862）客居温州时所见范稚禾藏双钩本的祖本", "麻姑山仙坛记", "1862"}, {"开皇六年（586）", "未知", "（诸星杓藏本）开皇六年（586）十二月五日刻立", "龙藏寺碑", "0586"}, {"宋干德六年（963）", "龙藏寺、龙兴寺", "宋干德六年（963）龙藏寺更名为“龙兴寺”", "龙藏寺碑", "0963"}, {"民国十四年（1925）", "龙藏寺、寒泉阁、半亭", "楠木面板有民国十四年（1925）朱士林题签：“宋拓龙藏寺碑，礼字不损，寒泉阁所得此碑第一善本，宣统十七年乙丑十月朔日半亭六十七岁", "龙藏寺碑", "1925"}, {"民国十五年（1926）", "龙藏寺", "”首页有民国十五年（1926）朱孝臧题签：“宋拓龙藏寺碑", "龙藏寺碑", "1926"}, {"道光十四年（1834）", "龙藏寺、潜研堂", "）册尾有道光十四年（1834）九月诸星杓（味青）过录《潜研堂金石文字跋尾》、《集古录》、《虚舟题跋》中关于《龙藏寺碑》的著录内容，其后还留有诸星杓将此本碑字与《金石萃编》录文对比的校勘后记", "龙藏寺碑", "1834"}, {"开皇六年（586）", "未知", "（唐翰题藏本）开皇六年（586）十二月五日", "龙藏寺碑", "0586"}, {"同治五年（1866）", "未知", "同治五年（1866）十月唐翰题从吴门石氏处购得", "龙藏寺碑", "1866"}, {"光绪二十九年（1903）", "未知", "古锦面板有光绪二十九年（1903）费念慈题签", "龙藏寺碑", "1903"}, {"同治八年（1869）", "未知", "”册前另有同治八年（1869）九月莫友芝为唐翰题署端", "龙藏寺碑", "1869"}, {"二十二年（1683）", "未知", "” 册尾有康熙二十二年（1683）黄云（仙裳）题跋：“三百年书法必以邢子愿先生为第一，余一瓣香□□□公，公极重隋碑，云曾见开府碑文，知欧、虞、褚、薛皆衣钵相承", "龙藏寺碑", "1683"}, {"同治十年（1871）", "未知", "” 另有同治十年（1871）正月沈树镛(郑斋)题跋", "龙藏寺碑", "1871"}, {"同治五年（1866）", "未知", "同治五年（1866）十月唐翰题校勘后记，唐氏云：“同治丙寅十月得于吴门石氏，以近本校泐字，多全文七十八字", "龙藏寺碑", "1866"}};

    @Override
    public EchartsData getTime(String keyword) {
        return null;
//        EchartsData echartsData = new EchartsData();
//        Set<EchartsNode> nodes = new HashSet<>();
//        Set<EchartsLink> links = new HashSet<>();
//        for (int i = 0; i < timespacelist.length; i++) {
//            if(timespacelist{i}{0}.contains(keyword)){
//                EchartsNode node = new EchartsNode();
//                EchartsLink link = new EchartsLink();
//                node.
//
//            }
//        }
    }

    @Override
    public List<List> getTimeRecallDetail(String keyword) {
        List<List> TimeRecallList = new ArrayList<>();
        for (int i = 0; i < timespacelist.length; i++) {
            if(timespacelist[i][0].contains(keyword)){
                List item = new ArrayList<>();
                item.add(timespacelist[i][3]+"--节点-->"+timespacelist[i][0]);
                item.add(timespacelist[i][0]);
                item.add(timespacelist[i][1]);
                item.add(timespacelist[i][2]);
                TimeRecallList.add(item);
            }
        }
        return TimeRecallList;
    }

    @Override
    public EchartsData getSpace(String keyword) {
        return null;
    }

    @Override
    public List<List> getSpaceRecallDetail(String keyword) {
        List<List> TimeRecallList = new ArrayList<>();
        for (int i = 0; i < timespacelist.length; i++) {
            if(timespacelist[i][1].contains(keyword)){
                List item = new ArrayList<>();
                item.add(timespacelist[i][3]+"--节点-->"+timespacelist[i][0]);
                item.add(timespacelist[i][0]);
                item.add(timespacelist[i][1]);
                item.add(timespacelist[i][2]);
                TimeRecallList.add(item);
            }
        }
        return TimeRecallList;
    }

    @Override
    public EchartsData getTimeSpace(String time, String space) {
        return null;
    }

    @Override
    public List<List> getTimeSpaceRecallDetail(String time, String space) {
        List<List> TimeRecallList = new ArrayList<>();
        for (int i = 0; i < timespacelist.length; i++) {
            if(timespacelist[i][0].contains(time) && timespacelist[i][1].contains(space)){
                List item = new ArrayList<>();
                item.add(timespacelist[i][3]+"--节点-->"+timespacelist[i][0]);
                item.add(timespacelist[i][0]);
                item.add(timespacelist[i][1]);
                item.add(timespacelist[i][2]);
                TimeRecallList.add(item);
            }
        }
        return TimeRecallList;
    }

    @Override
    public EchartsData getPeriodTime(String time1, String time2) {
        return null;
    }

    @Override
    public List<List> getPeriodRecallDetail(String time1, String time2) {
        List<List> TimeRecallList = new ArrayList<>();
        for (int i = 0; i < timespacelist.length; i++) {
            if(Integer.parseInt(time1) < Integer.parseInt(timespacelist[i][4]) && Integer.parseInt(time2) > Integer.parseInt(timespacelist[i][4])){
                List item = new ArrayList<>();
                item.add(timespacelist[i][3]+"--节点-->"+timespacelist[i][0]);
                item.add(timespacelist[i][0]);
                item.add(timespacelist[i][1]);
                item.add(timespacelist[i][2]);
                TimeRecallList.add(item);
            }
        }
        return TimeRecallList;
    }
}