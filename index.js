/* ❢◥ ▬▬▬▬▬ A I ▬▬▬▬▬ ◤❢ */
/**
 * Funciones relacionadas con inteligencia artificial
 */

export { awita } from "./ai/bot-awita.js";
export { awa } from "./ai/bot-awitapv.js";
export { cici } from "./ai/cici.js";
export { copilot } from "./ai/copilot.js";
export { turboseek } from "./ai/turboseek.js";
export { publicai } from "./ai/publicai.js";
export { grammarcheck } from "./ai/grammarcheck.js"
export { webpilot } from "./ai/webpilot.js";
export { default as ayesoul } from "./ai/ayesoul.js";
export { blackboxAIChat } from "./ai/blackbox.js";// NO WORKING ANYMORE - need fix
export { fluxGenerateAI } from "./ai/flux.js";
export { luminaiChat } from "./ai/luminai.js";// NO WORKING ANYMORE - no fix
export { chatai } from "./ai/chatai.js";// NO WORKING ANYMORE - not in my hands
export { claude } from "./ai/claude.js"; // NO WORKING ANYMORE - need fix
export { gpt4, gpt3 } from "./ai/stablediffusion.js";
export { pollai } from "./ai/polli.js";
export { doppleAi } from "./ai/doppleAi.js";
export { pollinations } from "./ai/pollinations.js";
export { qwenai } from "./ai/qwenai.js"; // NO WORKING ANYMORE - need fix login
export { t2v } from "./ai/txt2video.js"; // NO WORKING ANYMORE - no fix
export { venice } from "./ai/venice.js";
export { kimi } from "./ai/kimi.js"; // NO WORKING ANYMORE - no fix
export { deepseek } from "./ai/deepseek.js";
export { gemini } from "./ai/gemini.js";

/* ❢◥ ▬▬▬▬▬ D O W N L O A D ▬▬▬▬▬ ◤❢ */
/**
 * Funciones para descargas de redes sociales y música
 */

export { douyin } from "./download/douyin.js";
export { douyin2 } from "./download/douyin2.js";
export { douyin3 } from "./download/douyin3.js"; // need cloudflare - not for now :v
export { douyin4 } from "./download/douyin4.js";
export { default as fbdl2 } from "./download/facebook.js";
export { fbdl2v2 } from "./download/facebook2.js";
export { default as igram } from "./download/instagram.js"; // NO WORKING ANYMORE
export { default as instagram2 } from "./download/instagram2.js";
export { default as instagram3 } from "./download/instagram3.js";
export { igdl4 } from "./download/instagram4.js"; // NO WORKING ANYMORE
export { igdl5 } from "./download/instagram5.js";
export { mediafire } from "./download/mediafire.js";
export { pindl } from "./download/pinterest.js";
export { pindl2 } from "./download/pinterest2.js";
export { scdl1 } from "./download/soundcloud.js";
export { scdl2 } from "./download/soundcloud2.js";
export { descargarCancion } from "./download/spotify.js";
export { downloadFromSpotymate } from "./download/spotify2.js"; // no work
export { spotiDownV3 } from "./download/spotify3.js"; // no work
export { spdl5 } from "./download/spotify4.js"; // no work
export { spotifyDL } from "./download/spotify5.js"; // no work
export { spotidl } from "./download/spotify6.js"; // no work
export { spotify7 } from "./download/spotify7.js";
export { spotify8 } from "./download/spotify8.js"; 
export { spotify9 } from "./download/spotify9.js"; // no work
export { threadsScraper } from "./download/threads.js";
export { threadsImg } from "./download/threads2.js"; // no work
export { tiktok } from "./download/tiktok.js";
export { tiktok2 } from "./download/tiktok2.js";
export { tiktok3 } from "./download/tiktok3.js"; // not work
export { tiktok4 } from './download/tiktok4.js'; 
export { twitter } from "./download/twitter.js";
export { twitter2 } from "./download/twitter2.js";
export { twitter3 } from "./download/twitter3.js"; // not work
export { default as ytdown } from "./download/youtube.js";
export { default as ytdownVideo } from "./download/youtube2.js";
export { ytdlmp3, ytdlmp4 } from "./download/youtube3.js";
export { dlyta } from "./download/youtube4.js"; // no work
export { dlytv } from "./download/youtube5.js"; // no work
export { ytmp3 } from "./download/youtube6.js";
export { y2ma, y2mv, y2mu } from "./download/youtube7.js"; // no auth
export { audown, vidown } from "./download/youtube8.js";
export { default as ssvid, ssvidmp3 } from "./download/youtube9.js"; // no work
export { mobidlmp3, mobidlmp4 } from "./download/youtube10.js"; 
export { mp3ccmp3, mp3ccmp4 } from "./download/youtube11.js"; // no auth
export { notubedl, notubesc } from "./download/youtube12.js";
export { getmp3, getmp4 } from "./download/youtube13.js";
export { info, convert, status } from "./download/youtube14.js"; // ned fix
export { default as savetube } from "./download/youtube15.js";

/* ❢◥ ▬▬▬▬▬ S E A R C H ▬▬▬▬▬ ◤❢ */
/**
 * Funciones de búsqueda o exploracion
 */

export { getBestLyrics } from "./search/lyrics.js";
export { spotifyxv, fspotifyxv, spotifymeta } from "./search/spotify.js";
export { soundcloudSearch, fsoundcloudSearch } from "./search/soundcloud.js";
export { appleMusicSearch, fappleMusicSearch } from "./search/applemusic.js";
export { ytSearch, fytSearch } from "./search/youtube.js";
export { yahooimg } from "./search/yahoo.js";
export { googleimg } from "./search/google.js";
export { bingimg } from "./search/bing.js";
export { rSearch } from "./search/roblox.js";
export { searchncs, featuredncs, ncsDownload } from "./search/ncs.js";

/* ❢◥ ▬▬▬▬▬ U T I L S ▬▬▬▬▬ ◤❢ */
/**
 * Utilidades generales para AwiTa
 */

export { isTooLarge } from "./tools/bot-utils.js";
export { checknsfw } from "./tools/bot-nsfw.js";
export { removebg } from "./tools/removebg.js"; //new
export { blurface } from "./tools/blurface.js"; // new
export { compress } from "./tools/compress.js"; // new
export { upscale } from "./tools/upscale.js"; // new
export { cartoon } from "./tools/cartoon.js"; // new
export { ytResumen } from "./tools/youtubesummary.js";
export { yttranscript } from "./tools/youtubetranscript.js";
export { igdlp } from "./tools/instaprofilepic.js";
export {
  bassBoost,
  audio3D,
  vocalRemover,
  autoPanner,
  noiseReducer,
  pitchShifter,
  reverb,
  reverseAudio,
  stereoPanner,
  tempo,
} from "./tools/audioalter.js";
export { transcriptyt2 } from "./tools/youtubetranscript2.js";
export { ytsummary2 } from "./tools/youtubesummary2.js";
export { humanize } from "./tools/texthumanize.js";
export { extractIdeas } from "./tools/youtubeideas.js";
export { enhancePrompt } from "./tools/enhanceprompt.js";
export { describeImage } from "./tools/imagedescript.js";
export { nsfw } from "./tools/nsfw.js";

/* ❢◥ ▬▬▬▬▬ E C O N ▬▬▬▬▬ ◤❢ */
/**
 * Economía y juegos AwiTa
 */

export { chamba, getTemporada } from "./econ/bot-data.js";

/* ❢◥ ▬▬▬▬▬ N S F W ▬▬▬▬▬ ◤❢ */
/**
 * Descarga de contenido NSFW
 */

export { xnxxsearch, xnxxdl } from "./nsfw/xnxx.js";
export { xvideossearch, xvideosdl } from "./nsfw/xvideos.js";
export { phdl } from "./nsfw/pornhub.js";