/**
 * 특정 시각에 한 번만 수행되는 예약작업 만들기
 */
/** 1) 필요한 패키지 참조하기 */
import logger from "./helper/LogHelper.js";
import dayjs from "dayjs";
import schedule from "node-schedule";

/** 2) 예약작업이 실행될 시간 */
// 현재 시각
const atTime = dayjs();
logger.debug(atTime.format("HH:mm:ss"));