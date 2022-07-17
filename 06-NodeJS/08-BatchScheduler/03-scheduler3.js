/**
 * Crontab 스타일의 스케쥴 지정
 * --> link = crontab.guru
 */
/** 1) 필요한 패키지 참조하기 */
import logger from "./helper/LogHelper.js";
import schedule, { scheduleJob } from "node-schedule";

/** 2) 매 분마다 수행 */
schedule.scheduleJob("* * * * *", () => logger.debug("1분에 한 번씩 수행"));

/** 3) 매 시 15, 45분마다 수행 */
schedule.scheduleJob("15,45 * * * *", () => logger.debug("매 시 15, 45분마다 수행"));

/** 4) 2분마다 */
schedule.scheduleJob("*/2 * * * *", () => logger.debug("2분마다 한 번씩 수행"));

logger.info("예약작업이 설정되었습니다.");
