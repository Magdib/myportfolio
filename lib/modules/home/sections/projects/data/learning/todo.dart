import 'package:portfolio/core/constant/assets/app_assets.dart';

import '../../model/project_model.dart';

MyWorkModel todo = MyWorkModel(
  image: AppAssets().logo,
  name: "ToDo",
  gitHubLink: "",
  appStoreLink: "",
  playStoreLink: "",
  details:
      """Basic todo Mobile Application built with flutter and bloc to write the your daily task and complete them.It offers choose app theme so you can choose any color you like and it will be the app main color and it offers Arabic and English languages so you can pick what you like!""",
  imageList: getAllImages(),
);

List<String> getAllImages() {
  List<String> images = [];
  for (int i = 1; i <= 4; i++) {
    images.add("assets/images/ToDo$i.png");
  }
  return images;
}
