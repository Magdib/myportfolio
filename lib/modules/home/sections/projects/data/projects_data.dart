import 'package:portfolio/modules/home/sections/projects/data/laeeb/laeeb.dart';
import 'package:portfolio/modules/home/sections/projects/data/learning/games_browser.dart';
import 'package:portfolio/modules/home/sections/projects/data/learning/todo.dart';
import 'package:portfolio/modules/home/sections/projects/data/personal/ebuy_.dart';
import 'package:portfolio/modules/home/sections/projects/data/personal/lectures_organizer.dart';
import 'package:portfolio/modules/home/sections/projects/data/personal/uber.dart';
import 'package:portfolio/modules/home/sections/projects/data/protico/quran_voice.dart';

import '../model/project_model.dart';

List<MyWorkModel> myWorkList = [
  //Best priority 1
  ebuy,
  lecturesOrganizer,
  uber,
  //Free Lance priority 2
  laeeb,
  quranVoice,
  //Learning priority 3
  gamesBrowser,
  todo,
];
