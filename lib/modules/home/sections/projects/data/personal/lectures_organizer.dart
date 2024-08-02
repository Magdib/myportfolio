import 'package:portfolio/core/constant/assets/app_assets.dart';

import '../../model/project_model.dart';

MyWorkModel lecturesOrganizer = MyWorkModel(
  image: AppAssets().logo,
  name: "Lectures Organizer",
  gitHubLink: "",
  appStoreLink: "",
  playStoreLink: "",
  details:
      """Mobile Application built with flutter and getx, it is directed to university students to help them organize their study it offers subjects part,lectures part,count study time,count student average,background music while study share lectures, turn images into pdf,dark mood and many more features to help students organize their study!""",
  imageList: getAllImages(),
);

List<String> getAllImages() {
  List<String> images = [];
  for (int i = 1; i <= 20; i++) {
    images.add("assets/images/LO$i.png");
  }
  return images;
}
