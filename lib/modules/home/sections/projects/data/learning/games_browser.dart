import 'package:portfolio/core/constant/assets/app_assets.dart';

import '../../model/project_model.dart';

MyWorkModel gamesBrowser = MyWorkModel(
  image: AppAssets().logo,
  name: "Games Browser",
  gitHubLink: "",
  appStoreLink: "",
  playStoreLink: "",
  details:
      """Mobile Application to browse some android games you can filter games by size, complete time and internet access requirement it shows the game date, size, price and many more details it also shows game trailer using youtube video player and offers game download link all in one!""",
  imageList: getAllImages(),
);

List<String> getAllImages() {
  List<String> images = [];
  for (int i = 1; i <= 4; i++) {
    images.add("assets/images/GB$i.png");
  }
  return images;
}
