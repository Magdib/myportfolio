import 'package:portfolio/core/constant/assets/app_assets.dart';

import '../../model/project_model.dart';

MyWorkModel uber = MyWorkModel(
  image: AppAssets().logo,
  name: "Uber",
  gitHubLink: "",
  appStoreLink: "",
  playStoreLink: "",
  details:
      """Mobile Application to Order an uber it offers acuter price per distance system and you can use between three types of cars family, economy and luxury cars and it's also count the time of the trip with rate system to rate the uber you have ordered and see others reviews on the driver!""",
  imageList: getAllImages(),
);

List<String> getAllImages() {
  List<String> images = [];
  for (int i = 1; i <= 7; i++) {
    images.add("assets/images/Uber$i.png");
  }
  return images;
}
